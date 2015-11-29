(function() {


	var data = null;
        d3.csv("../Project/7cd6edef-0b8c-4f6c-95ac-7b4e799c54a4.csv", function(result){
            dataLoaded(result);
        });
        
          countDict = {};
        function dataLoaded(result){
          for(i=0; i<result.length;i++)
          {
            var item = result[i];
            if (countDict[item.call_name]){
              countDict[item.call_name] = countDict[item.call_name] + 1;
            }
            else{
              countDict[""+item.call_name] = 1;
            }

          }
            var json = {"call_counts": countDict};
  
    // D3 Bubble Chart 

    var diameter = 600;

    var svg = d3.select('#graph').append('svg')
                    .attr('width', diameter)
                    .attr('height', diameter);

    var bubble = d3.layout.pack()
                .size([diameter, diameter])
                .value(function(d) {return d.size;})
                .padding(10);
  
  var nodes = bubble.nodes(processData(json))
                        .filter(function(d) { return !d.children; });
 
  var vis = svg.selectAll('circle')
                    .data(nodes);
  
  vis.enter().append('circle')
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
            .attr('r', function(d) { return d.r; })
            .attr('class', function(d) { return d.className; });
        }
  console.log(countDict);
  function getClassName(data){
    var process = ["new_pid","nt_create_user_process","nt_terminate_process"];
    var file = ["nt_create_file","nt_read_file","nt_write_file","nt_delete_file"];
    var registry = ["nt_create_key", "nt_create_key_transacted", "nt_open_key", "nt_open_key_ex", "nt_open_key_transacted", "nt_open_key_transacted_ex","nt_delete_key","nt_query_key"];
    var virtual = ["nt_read_virtual_memory","nt_write_virtual_memory"];
    var ipc = ["nt_create_port","nt_connect_port","nt_listen_port","nt_accept_connect_port","nt_complete_connect_port","nt_request_port","nt_request_wait_reply_port","nt_reply_port","nt_reply_wait_reply_port","nt_reply_wait_receive_port","nt_impersonate_client_of_port"];
    var memSection = ["nt_create_section","nt_open_section","nt_map_view_of_section"];
    if(process.indexOf(data)!=-1){
      return "process";
    }
    else if(file.indexOf(data)!=-1){
      return "file";
    }
    else if(registry.indexOf(data)!=-1){
      return "registry";
    }
    else if(virtual.indexOf(data)!=-1){
      return "virtual";
    }
    else if(ipc.indexOf(data)!=-1){
      return "ipc";
    }
    else if(memSection.indexOf(data)!=-1){
      return "mem-section";
    }
    else{
      return "other";
    }
  }
  function processData(data) {
    var obj = data.call_counts;

    var newDataSet = [];

    for(var prop in obj) {
      newDataSet.push({name: prop, className: getClassName(prop), size: obj[prop]});
    }
    return {children: newDataSet};
  }
  
})();