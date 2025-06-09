console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = "assets/star-empty.svg";
    starContainer.append(img);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (i <= filledStars) {
      img.src = "assets/star-filled.svg";
    } else {
      img.src = "assets/star-empty.svg";
    }
    starContainer.append(img);
  }
}

renderStars(2);

function renderStars(filledStars = 0) {
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src =
      i <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

    img.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(img);
  }
}

renderStars();
