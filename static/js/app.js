// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select('tbody');

// Console.log the UFO data from data.js
// console.log(tableData);

// Load data
tableData.forEach((ufoReport) => {
    var row = tbody.append('tr');
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

// Create filter for the tableData

// Select the button
var button = d3.select('#filter-btn');

// Select the form
var form = d3.select('#form');

// Create the event handlers
button.on('click', runEnter);
form.on('submit', runEnter);

// Complete the event handler function for the form
function runEnter() {
    

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime');

    // Get the value property of the input element
    var inputValue = inputElement.property('value');

    console.log(inputValue);
    // console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);

    // Clear the existing data to be replaced by the new data 
    tbody.html('');

    // Add in the filtered data
    filteredData.forEach((filteredReport) => {
        var row = tbody.append('tr');
        Object.entries(filteredReport).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });


};
