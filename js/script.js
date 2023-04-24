
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

    textareaText.style.color = "black";
    textareaBinary.style.color = "black";

    textareaDiv1.style.left = "50%";
    textareaDiv2.style.right = "50%";

    reverse.style.transform = "rotate(180deg)";

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
    textareaBinary.style.color = "black";

    textareaDiv1.style.left = "0";
    textareaDiv2.style.right = "0";

    reverse.style.transform = "rotate(0deg)";

    setTimeout(() => {
      text.style.opacity = 1;
      binary.style.opacity = 1;
      text.innerText = "Text";
      binary.innerText = "Binary";
    }, 1000);
  }
});


copy.addEventListener("click", () => {
  if (bool === true) {
    textareaBinary.select();
    document.execCommand("copy");
  } else {
    textareaText.select();
    document.execCommand("copy");
  }
});


clear.addEventListener("click", () => {
  textareaText.value = "";
  textareaBinary.value = "";
});

convert.addEventListener("click", textConvert);


function textConvert() {

  if (bool === true) {
  let textValue = textareaText.value.toLowerCase();
  let arrayText = [];
  let allText = "";
  for (let x = 0; x < textValue.length; x++) {
    if (textValue[x] === " ") {
      arrayText[x] = "00100000";
      allText += arrayText[x] + " ";
    } else if (textValue[x] === "ç") {
      arrayText[x] = "1100001110100111";
      allText += arrayText[x] + " ";
    } else if (textValue[x] === "ğ") {
      arrayText[x] = "1100010010011111";
      allText += arrayText[x] + " ";
    } else if (textValue[x] === "ı") {
      arrayText[x] = "1100010010110001";
      allText += arrayText[x] + " ";
    } else if (textValue[x] === "ö") {
      arrayText[x] = "1100001110110110";
      allText += arrayText[x] + " ";
    } else if (textValue[x] === "ş") {
      arrayText[x] = "1100010110011111";
      allText += arrayText[x] + " ";
    } else if (textValue[x] === "ü") {
      arrayText[x] = "1100001110111100";
      allText += arrayText[x] + " ";
    } else {
      arrayText[x] = textValue.charCodeAt(x).toString(2);
      allText += arrayText[x] + " ";
    }
  }
  textareaBinary.value = allText;
 
  } else {
    let binaryValue = textareaBinary.value.replace(/\s+/g, '');
    let arrayBinary = [];
    let sliceCode;
    let counter = 0;

    for (let x = 0; x < (binaryValue.length / 8); x++) {
      sliceCode = binaryValue.slice(counter, (counter + 8));
      if (sliceCode == "00100000") {
        arrayBinary.push(" ");
        counter += 8;
      } else if (sliceCode == "01100001") {
        arrayBinary.push("a");
        counter += 8;
      } else if (sliceCode == "01100010") {
        arrayBinary.push("b");
        counter += 8;
      } else if (sliceCode == "01100011") {
        arrayBinary.push("c");
        counter += 8;
      } else if (sliceCode == "01100100") {
        arrayBinary.push("d");
        counter += 8;
      } else if (sliceCode == "01100101") {
        arrayBinary.push("e");
        counter += 8;
      } else if (sliceCode == "01100110") {
        arrayBinary.push("f");
        counter += 8;
      } else if (sliceCode == "01100111") {
        arrayBinary.push("g");
        counter += 8;
      } else if (sliceCode == "01101000") {
        arrayBinary.push("h");
        counter += 8;
      } else if (sliceCode == "01101001") {
        arrayBinary.push("i");
        counter += 8;
      } else if (sliceCode == "01101010") {
        arrayBinary.push("j");
        counter += 8;
      } else if (sliceCode == "01101011") {
        arrayBinary.push("k");
        counter += 8;
      } else if (sliceCode == "01101100") {
        arrayBinary.push("l");
        counter += 8;
      } else if (sliceCode == "01101101") {
        arrayBinary.push("m");
        counter += 8;
      } else if (sliceCode == "01101110") {
        arrayBinary.push("n");
        counter += 8;
      } else if (sliceCode == "01101111") {
        arrayBinary.push("o");
        counter += 8;
      } else if (sliceCode == "01110000") {
        arrayBinary.push("p");
        counter += 8;
      } else if (sliceCode == "01110010") {
        arrayBinary.push("r");
        counter += 8;
      } else if (sliceCode == "01110011") {
        arrayBinary.push("s");
        counter += 8;
      } else if (sliceCode == "01110100") {
        arrayBinary.push("t");
        counter += 8;
      } else if (sliceCode == "01110101") {
        arrayBinary.push("u");
        counter += 8;
      } else if (sliceCode == "01110110") {
        arrayBinary.push("v");
        counter += 8;
      } else if (sliceCode == "01111001") {
        arrayBinary.push("y");
        counter += 8;
      } else if (sliceCode == "01111010") {
        arrayBinary.push("z");
        counter += 8;
      } else if (sliceCode == "01110111") {
        arrayBinary.push("w");
        counter += 8;
      } else if (sliceCode == "01111000") {
        arrayBinary.push("x");
        counter += 8;
      } else if (sliceCode == "01110001") {
        arrayBinary.push("q");
        counter += 8;
      } else {
        kot();
      }
    }
    
    function kot() {
      for (let x = 0; x < (binaryValue.length / 16); x++) {
        sliceCode = binaryValue.slice(counter, (counter + 16));
        if (sliceCode == "1100001110100111") { 
          arrayBinary.push("ç");
          counter += 16;
        } else if (sliceCode == "1100010010011111") {
          arrayBinary.push("ğ");
          counter += 16;
        } else if (sliceCode == "1100010010110001") {
          arrayBinary.push("ı");
          counter += 16;
        } else if (sliceCode == "1100001110110110") {
          arrayBinary.push("ö");
          counter += 16;
        } else if (sliceCode == "1100010110011111") {
          arrayBinary.push("ş");
          counter += 16;
        } else if (sliceCode == "1100001110111100") {
          arrayBinary.push("ü");
          counter += 16;
        }
      }
    }
    textareaText.value = arrayBinary.join("");
  }
} 






































