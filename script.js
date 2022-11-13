const colorCards = document.querySelectorAll(".color-card");
const title = document.querySelector(".title");

//funkcja dodaje eventListener do colorCard
colorCards.forEach((card) => {
  card.addEventListener(
    "click",
    //funkcja zmienia kolor
    () => {
      title.style.color = card.id;
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
