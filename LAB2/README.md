# Lab 2

For this assignment you have to update the page created in the [Lab 1](https://github.com/jaympatel/InformationVisualization/tree/master/LAB1) to use a CSV file instead of hard-coded data.

The CSV file is located in the same repository. [data.csv](https://github.com/jaympatel/InformationVisualization/blob/master/LAB2/data.csv)

![alt text](img/lab2.png "Output Image")


The file should be in the same folder of your html file, however you don't have to submit the CSV file just the HTML. The file has GDPs of various years for each country. You should filter to consider only those from 2012.

=> SUBMIT one single HTML file named lastname_firstname_2.html

All your code (HTML, CSS and Javascript) should be within this single file.

The d3 library has to be imported using the following tag: 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
```


To get data on HTML do following:

- Put data.csv and patel_jay_2.html file in the same folder
- Run following command in the terminal in the same path: python -m SimpleHTTPServer
