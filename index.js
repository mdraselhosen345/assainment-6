//mango tree---------- button


document.getElementById("mango-btn-tree").addEventListener("click", function() {
  var text = document.getElementById("card-mango-tree");
  
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});


document.getElementById("tree-btn").addEventListener("click", function() {
  var text = document.getElementById("card-tree");
  
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

document.getElementById("tree-btn-tameto").addEventListener("click", function() {
  var text = document.getElementById("card-tometo-tree");
  
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});
