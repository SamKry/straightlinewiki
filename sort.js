document.addEventListener("DOMContentLoaded", function () {
  // Define a sorting direction object to keep track of the current sorting direction for each column
  const sortDirection = {};

  // Get all the th elements (table headers) inside the table with the 'container' class
  const tableHeaders = document.querySelectorAll(".container th");

  // Attach click event listener to each table header
  tableHeaders.forEach((header) => {
    header.addEventListener("click", handleSortClick);
  });

  // Sorting function to handle click events on table headers
  function handleSortClick(event) {
    // Get the column identifier from the 'data-sort-col' attribute of the clicked header
    const columnToSort = event.target.dataset.sortCol;

    // If the sortDirection object doesn't have a property for this column, initialize it with "asc" (ascending)
    if (!sortDirection[columnToSort]) {
      sortDirection[columnToSort] = "asc";
    } else {
      // If the column is already being sorted, toggle the sorting direction
      sortDirection[columnToSort] = sortDirection[columnToSort] === "asc" ? "desc" : "asc";
    }

    // Call the sorting function and pass the column identifier and sorting direction
    sortTableData(columnToSort, sortDirection[columnToSort]);

    // Prevent the default link behavior (to avoid page reload if you decide to use anchor tags for headers)
    event.preventDefault();
  }

  // Sorting function for all columns
  function sortTableData(columnToSort, direction) {
    // Get the table element
    const table = document.querySelector(".container");

    // Get the rows to be sorted (excluding the header row)
    const rows = Array.from(table.querySelectorAll("tr")).slice(1);

    // Determine the index of the column to be sorted
    let columnIndex;
    switch (columnToSort) {
      case "title":
        columnIndex = 0; // Index of the Title column
        break;
      case "straightliner":
        columnIndex = 1; // Index of the Straightliner column
        break;
      case "posted_on":
        columnIndex = 2; // Index of the Posted_On column
        break;
      case "completeness":
        columnIndex = 3; // Index of the Completeness column
        break;
      case "medal":
        columnIndex = 4; // Index of the Medal column
        break;
      case "burdell_score":
        columnIndex = 5; // Index of the Burdell_Score column
        break;
      case "line_length":
        columnIndex = 6; // Index of the Line_Length column
        break;
      case "max_deviation":
        columnIndex = 7; // Index of the Max_Deviation column
        break;
      default:
        // If the column identifier is not recognized, do nothing
        return;
    }

    // Sort the rows based on the selected column and sorting direction
    rows.sort((row1, row2) => {
      const cell1 = getSortableValue(row1.cells[columnIndex].textContent.trim());
      const cell2 = getSortableValue(row2.cells[columnIndex].textContent.trim());

      if (columnIndex === 2) {
// Sort the rows based on the selected column and sorting direction
rows.sort((row1, row2) => {
  const cell1 = row1.cells[columnIndex].textContent.trim();
  const cell2 = row2.cells[columnIndex].textContent.trim();

  return direction === "asc" ? cell1.localeCompare(cell2) : cell2.localeCompare(cell1);
});


        // If sorting the "Posted_On" column, convert the date strings to Date objects for comparison
      const date1 = new Date(cell1);
      const date2 = new Date(cell2);

      // Compare the Date objects directly
      return direction === "asc" ? cell1.localeCompare(cell2) : cell2.localeCompare(cell1);

    } else if (columnIndex === 3 || columnIndex === 5 || columnIndex === 6 || columnIndex === 7) {
        // If sorting a column with decimal values, parse the numeric part for comparison
        const numericCell1 = parseFloat(cell1);
        const numericCell2 = parseFloat(cell2);

        // If either value is NaN (NULL), treat it as the largest value (to be displayed at the bottom)
        if (isNaN(numericCell1)) return 1;
        if (isNaN(numericCell2)) return -1;

        return direction === "asc" ? numericCell1 - numericCell2 : numericCell2 - numericCell1;
      } else if (columnIndex === 4) {
        const order = { "Platinum": 1, "Gold": 2, "Silver": 3, "Bronze": 4, "None": 5, "-": 6 };
        const medal1 = order[cell1];
        const medal2 = order[cell2];

        // If either value is not in the custom mapping, treat it as the largest value (to be displayed at the bottom)
        if (medal1 === undefined) return 1;
        if (medal2 === undefined) return -1;

        return direction === "asc" ? medal1 - medal2 : medal2 - medal1;
      }
      
      
      else {
        // For other columns, use localeCompare for string comparison
        return direction === "asc" ? cell1.localeCompare(cell2) : cell2.localeCompare(cell1);
      }
    });

    // Clear the existing table rows
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // Append the sorted rows back to the table
    rows.forEach((row) => {
      table.appendChild(row);
    });
  }

  // Function to extract sortable values from cells that contain additional text (e.g., appendices like km, m, %, N/D, etc.)
  function getSortableValue(cellText) {
    // Match the numeric part of the cell text and return it as a sortable value
    const numericPart = cellText.match(/-?\d+(\.\d+)?/);
    return numericPart ? numericPart[0] : cellText;
  }
});
