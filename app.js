const colorSelector = document.querySelector("#appInput");
const button = document.querySelector(".appButton");
const colorSelected = document.querySelector(".appColorCode");
const colorBox = document.querySelector(".appColorBox");
const clipboardP = document.querySelector(".appClipboard");

button.addEventListener("click", () => {
  colorSelected.textContent = colorSelector.value;
  colorBox.style.backgroundColor = colorSelector.value;
  console.log(colorBox)

  clipboardP.textContent = "¡Color copiado al portapapeles!";

  navigator.clipboard
    .writeText(colorSelector.value)
    .catch((e) => console.log(e))
});
