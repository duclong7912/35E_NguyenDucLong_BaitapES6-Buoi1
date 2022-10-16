const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
let showBtn = () => {
  let content = ``;
  for (let i = 0; i < colorList.length; i++) {
    if (i == 0) {
      content += `
      <button id="button" class="color-button ${colorList[i]} active"></button>
      `;
      document.querySelector("#house").className = "house " + colorList[i];
    } else {
      content += `<button id="button" class="color-button ${colorList[i]}"></button>`;
    }
  }
  document.getElementById("colorContainer").innerHTML = content;
};
showBtn();

let changeColorHouse = () => {
  let color = document.querySelectorAll(".color-button");
  for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", function () {
      document.querySelector("#house").className = "house " + colorList[i];
      let colorContainer = document.querySelector("#colorContainer");
      colorContainer.querySelector(".active").classList.remove("active");
      console.log(colorContainer);
      color[i].classList.add("active");
    });
  }
};
changeColorHouse();
