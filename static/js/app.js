// import the data from data.js
const tableData = Data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");


// Simple JavaScript console.log statement
function printhello() {
    console.log("Hello there!");
}

function addition(a, b){
    return a + b;
}
console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d){
    var total = addition(c, d) * 2

    return total;
}

function buildTable(data) {
    tbody.html("");
    
}

data.forEach(dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach(val) => {
        let cell = row.append("td");
        cell.text(val);

        }
        
    );
});

function buildTable(data) {
    //First, clear out any existing data
    tbody.html("");

    //Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to teh table body
        let row =tbody.append("tr");

        //Loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach(val) => {
            let cell = row.append("td");
            cell.text(val);
        }
    );

    })
}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


    //Check to see if a date was entered and filter the data
    //using that date.

    if (date)
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row =>row.datetime === date);

};

// Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);

};

d3.selectAll("#filter-btn").on("Click", handleClick);

buildTable(tableData);









