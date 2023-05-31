function sortTable(columnIndex) {
  let table = document.getElementById("myTable");
  let rows = Array.from(table.rows);
  let headerRow = rows.shift();
  let isAscending = headerRow.getElementsByTagName("span")[columnIndex].classList.toggle("asc");
  headerRow.getElementsByTagName("span")[columnIndex].classList.toggle("desc");

  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[columnIndex].textContent.trim();
    let cellB = rowB.cells[columnIndex].textContent.trim();

    if (cellA === cellB) return 0;

    if (isAscending) {
      return cellA.localeCompare(cellB);
    } else {
      return cellB.localeCompare(cellA);
    }
  });

  table.tBodies[0].append(...rows);
}
