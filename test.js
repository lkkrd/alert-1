var colorChangeItems = [];

const colorCards = document.querySelectorAll(".color-card");
const title = document.querySelector(".title");
const container = document.querySelector(".container");
const agreeBtns = document.querySelectorAll(".agree-btn");

//colorChangeItems to tabelka, w której znajdują się wszystkie elementy, które mają mieć zmieniony kolor ramki
colorChangeItems = [title, container, agreeBtns[0], agreeBtns[1]];

colorCards.forEach((card) => {
  card.addEventListener(
    "click",
    //funkcja zmienia kolor ramek elementów z listy changeColorItems
    () => {
      let color = card.id;
      colorChangeItems.forEach((ccItem) => {
        if (ccItem.style.borderColor == "black") {
          ccItem.style.borderColor = color;
        } else {
          ccItem.style.color = color;
        }
      });
      //title nie ma ramki, więc musi być załatwiony inaczej
      // title.style.color = color;
    }
  );

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
});
