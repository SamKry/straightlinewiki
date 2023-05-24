
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
