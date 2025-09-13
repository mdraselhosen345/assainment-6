
  const mangoBtn = document.getElementById("mango-btn-tree");
  const treeBtn = document.getElementById("tree-btn");
  const flowerBtn = document.getElementById("flower-btn");
  const allBtn = document.getElementById("all-btn");

  const mangoCards = document.querySelectorAll(".card");
  const treeCards = document.querySelectorAll(".cards");
  const flowerCards = document.querySelectorAll(".carded");


  function hideAllCards() {
    mangoCards.forEach(card => card.classList.add("hidden"));
    treeCards.forEach(card => card.classList.add("hidden"));
    flowerCards.forEach(card => card.classList.add("hidden"));
  }

  allBtn.addEventListener("click", () => {
    mangoCards.forEach(card => card.classList.remove("hidden"));
    treeCards.forEach(card => card.classList.remove("hidden"));
    flowerCards.forEach(card => card.classList.remove("hidden"));
  });


  mangoBtn.addEventListener("click", () => {
    hideAllCards();
    mangoCards.forEach(card => card.classList.remove("hidden"));
  });

  treeBtn.addEventListener("click", () => {
    hideAllCards();
    treeCards.forEach(card => card.classList.remove("hidden"));
  });

  flowerBtn.addEventListener("click", () => {
    hideAllCards();
    flowerCards.forEach(card => card.classList.remove("hidden"));
  });
  window.addEventListener("DOMContentLoaded", () => {
    mangoCards.forEach(card => card.classList.remove("hidden"));
    treeCards.forEach(card => card.classList.remove("hidden"));
    flowerCards.forEach(card => card.classList.remove("hidden"));
  });

//---------------------------------------------------------------------
