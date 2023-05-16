
//THIS (KIND OF) WORKS.
//It has some obvious issues, but I AM NOT DELETING IT UNTIL I GET THE REST TO BE FUNCTIONAL.

function showContent(id) {
  var content = document.getElementById("content" + id);
  content.style.opacity = "1";
}
function hideContent(id) {
  var content = document.getElementById("content" + id);
  content.style.opacity = "0";
}



//THIS FOLLOWING DOES NOT WORK. BE FUCKING CAREFUL.
//PLEASE FIX IT.
/*
function sortTable(columnIndex) {
  const valueIndexMap = {
    "incomplete": -1,
    "unknown": 0,
    "0%": 1,
    "10%": 2,
    "20%": 3,
  };

  let table = document.getElementById("table.html");
  let rows = Array.from(table.rows);
  let headerRow = rows.shift();
  let isAscending = headerRow.getElementsByTagName("span")[columnIndex].classList.toggle("asc");
  headerRow.getElementsByTagName("span")[columnIndex].classList.toggle("desc");

  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[columnIndex].textContent.trim().toLowerCase();
    let cellB = rowB.cells[columnIndex].textContent.trim().toLowerCase();

    let indexA = valueIndexMap[cellA] === undefined ? Number.MAX_SAFE_INTEGER : valueIndexMap[cellA];
    let indexB = valueIndexMap[cellB] === undefined ? Number.MAX_SAFE_INTEGER : valueIndexMap[cellB];

    if (indexA === indexB) return 0;

    if (isAscending) {
      return indexA > indexB ? 1 : -1;
    } else {
      return indexA < indexB ? 1 : -1;
    }
  });

  table.tBodies[0].append(...rows);
}
*/
