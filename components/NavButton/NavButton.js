export const prevButton = document.querySelector('[data-js="button-prev"]');
let pageIndex = null;
prevButton.addEventListener("click", (pageIndex) => {
  if (pageIndex < 43 && pageIndex > 0) {
    pageIndex++;
  }
  fetchCharacters(pageIndex);
});

const nextButton = document.querySelector('[data-js="button-next"]');
