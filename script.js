const colorCards = document.querySelectorAll(".color-card");
const title = document.querySelector(".title");
const container = document.querySelector(".container");
const agreeBtns = document.querySelectorAll(".agree-btn");

//funkcja dodaje eventListener do colorCard
colorCards.forEach((card) => {
  card.addEventListener(
    "click",
    //funkcja zmienia kolor
    () => {
      let color = card.id;
      title.style.color = color;
      container.style.borderColor = color;
      agreeBtns.forEach((btn) => {
        btn.style.borderColor = color;
      });

      switch (card.id) {
        case "green":
          console.log("Case: succes alert");
          break;
        case "red":
          console.log("Case: warning alert");
          break;
        case "blue":
          console.log("Case: info alert");
          break;
        case "yellow":
          console.log("Case: papież alert");
          break;
      }
    }
  );
});
