// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select('tbody');

// Console.log the UFO data from data.js
console.log(tableData);

// Load data
tableData.forEach((ufoReport) => {
    var row = tbody.append('tr');
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});