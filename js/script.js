const logo = document.querySelector(".logo");
const text = document.querySelector(".text");
const copy = document.querySelector(".copy");
const clear = document.querySelector(".clear");
const binary = document.querySelector(".binary");
const sunSvg = document.querySelector(".sun-svg");
const reverse = document.querySelector(".reverse");
const convert = document.querySelector(".convert");
const whiteBg = document.querySelector(".white-bg");
const blackBg = document.querySelector(".black-bg");
const moonSvg = document.querySelector(".moon-svg");
const switchBtn = document.querySelector(".switch");
const buttons = document.querySelectorAll(".buttons");
const darkMode = document.querySelector(".dark-mode");
const logoText = document.querySelector(".logo-text");
const mainFrame = document.querySelector(".main-frame");
const textareaText = document.getElementById("textarea-text");
const textareaDiv1 = document.querySelector(".textarea-div-1");
const textareaDiv2 = document.querySelector(".textarea-div-2");
const darkModeIcons = document.querySelector(".dark-mode-icons");
const textareaBinary = document.getElementById("textarea-binary");

sunSvg.style.display = "none";
textareaBinary.style.backgroundColor = "gray";

let isDarkMode = true;

darkMode.addEventListener("click", () => {
  if (isDarkMode) {
    isDarkMode = false;
    
    whiteBg.style.display = "none";
    blackBg.style.display = "block";

    moonSvg.style.left = "100%";
    sunSvg.style.left = "100%";

    text.style.color = "white";
    binary.style.color = "white";

    logo.src = "./img/white-logo.png";
    logoText.style.color = "white";
    reverse.style.stroke = "white";
    darkMode.style.backgroundColor = "white";

    mainFrame.style.background = "rgb(52,53,65,0.5)";
    mainFrame.style.borderColor = "rgb(214,214,214,0.5)";
    mainFrame.style.boxShadow = "0 0 100px 0 rgba(255, 255, 255, 0.5)";

    buttons.forEach((e) => {
      e.style.color = "white";
      e.style.border = "1px solid white";

      e.addEventListener("mousemove", () => {
        e.style.borderColor = "transparent";
      });

      e.addEventListener("mouseout", () => {
        e.style.border = "1px solid white";
      });
    });

    setTimeout(() => {
      sunSvg.style.display = "flex";
      sunSvg.style.stroke = "white";
      moonSvg.style.display = "none";
      sunSvg.style.backgroundColor = "black";
      darkModeIcons.style.backgroundColor = "black";
    },1000);
  } else {
    isDarkMode = true;

    whiteBg.style.display = "block";
    blackBg.style.display = "none";

    moonSvg.style.left = "35%";
    sunSvg.style.left = "35%";

    text.style.color = "black";
    binary.style.color = "black";

    logoText.style.color = "black";
    logo.src = "./img/black-logo.png";
    reverse.style.stroke = "black";
    darkMode.style.backgroundColor = "black";

    mainFrame.style.borderColor = "rgb(52,53,65,0.5)";
    mainFrame.style.background = "rgb(214,214,214,0.5)";
    mainFrame.style.boxShadow = "0 0 100px 0 rgb(0, 0, 0, 0.5)";
    
    buttons.forEach((e) => {
      e.style.color = "black";
      e.style.border = "1px solid black";

      e.addEventListener("mousemove", () => {
        e.style.borderColor = "transparent";
      });

      e.addEventListener("mouseout", () => {
        e.style.border = "1px solid black";
      });
    });

    setTimeout(() => {
      sunSvg.style.display = "none";
      moonSvg.style.display = "flex";
      moonSvg.style.stroke = "black";
      darkModeIcons.style.backgroundColor = "white";
    },1000);
  }
});

let bool = true;

switchBtn.addEventListener("click", () => {
  if (bool === true) {
    bool = false;

    text.style.opacity = 0;
    binary.style.opacity = 0;
    textareaText.style.color = "white";
    textareaBinary.style.color = "black";

    textareaDiv1.style.left = "50%";
    textareaDiv2.style.right = "50%";

    reverse.style.transform = "rotate(180deg)";
    textareaBinary.style.backgroundColor = "white";
    textareaText.style.backgroundColor = "rgb(167, 167, 167)";

    setTimeout(() => {
      text.style.opacity = 1;
      binary.style.opacity = 1;
      text.innerText = "Binary";
      binary.innerText = "Text";
    }, 1000);
  } else {
    bool = true;
    
    text.style.opacity = 0;
    binary.style.opacity = 0;

    textareaText.style.color = "black";
    textareaBinary.style.color = "white";

    textareaDiv1.style.left = "0";
    textareaDiv2.style.right = "0";

    reverse.style.transform = "rotate(0deg)";
    textareaText.style.backgroundColor = "white";
    textareaBinary.style.backgroundColor = "rgb(167, 167, 167)";

    setTimeout(() => {
      text.style.opacity = 1;
      binary.style.opacity = 1;
      text.innerText = "Text";
      binary.innerText = "Binary";
    }, 1000);
  }
});
















