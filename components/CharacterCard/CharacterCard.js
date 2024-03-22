export function CharacterCard() {
  const cardContainer = document.querySelector('[data-js="card-container"]');
  console.log(cardContainer);

  const card = document.createElement("li");
  card.classList.add(".card");
  card.innerHTML = `<div class="card__image-container">
        <img
          class="card__image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content">
    // name
        <h2 class="card__title">Rick Sanchez</h2>
        <dl class="card__info">
          <dt class="card__info-title">Status</dt>
          <dd class="card__info-description">Alive</dd>
          <dt class="card__info-title">Type</dt>
          <dd class="card__info-description"></dd>
          <dt class="card__info-title">Occurrences</dt>
          <dd class="card__info-description">51</dd>
        </dl>
      </div>`;

  const name = document.createElement("h2");

  cardContainer.append(card);

  return card;
}
