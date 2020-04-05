document.addEventListener("DOMContentLoaded", () => {
  let localLang = localStorage.getItem("lang") == "rus" ? "rus" : "eng";
  let options = {
    lang: localLang,
    case: "down",
    letterCase: "under"
  };
  let textArea = new TextArea();
  let virtualKeyBoard = new VirtualKeyBoard(options);

  textArea.create();
  virtualKeyBoard.create();
  virtualKeyBoard.messegeBlock();

  setCursor = () => {
    textArea.setCaretPosition();
  };
  setInterval(() => setCursor());

  let html = document.querySelector("html");
  let keyValue;
  html.addEventListener("mousedown", event => {
    if (event.target.tagName == "BUTTON") {
      keyValue = virtualKeyBoard.mouseDownHandler(event);
      textArea.displayValue(keyValue);
    }
  });
  html.addEventListener("mouseup", event => {
    if (event.target.tagName == "BUTTON") {
      virtualKeyBoard.mouseUpHandler(event, keyValue);
    }
  });

  html.addEventListener("keydown", event => {
    if (!event.repeat) {
      if (event.altKey && event.shiftKey) {
        virtualKeyBoard.setLanguage();
      }
      if (checkValidateButton(event.code)) {
        event.preventDefault();
        virtualKeyBoard.keyDownHandler(event);
        virtualKeyBoard.activateButton(event);
        let keyValue = document.querySelector(`.${event.code}`).innerText;
        textArea.displayValue(keyValue);
      }
    }
  });
  html.addEventListener("keyup", event => {
    if (checkValidateButton(event.code)) {
      virtualKeyBoard.keyUpHandler(event);
      virtualKeyBoard.deActivateButton(event);
    }
  });

  checkValidateButton = buttonClick => {
    let flag = false;
    arrayForButton.forEach(element => {
      if (element.keyCode == buttonClick) {
        flag = true;
      }
    });
    return flag;
  };
});

class TextArea {
  create = () => {
    let textBlock = document.createElement("textarea");
    textBlock.classList.add("textarea");

    let divBlock = document.createElement("div");
    divBlock.classList.add("textarea-container");
    divBlock.appendChild(textBlock);
    document.body.appendChild(divBlock);
  };

  displayValue = keyValue => {
    let textArea = document.querySelector(".textarea");
    textArea.disabled - false;
    let text = textArea.value;
    let positionCursor = this.position;
    switch (keyValue) {
      case "Tab":
        textArea.value += "    ";
        break;
      case "Backspace":
        positionCursor != 0 &&
          (textArea.value =
            text.slice(0, positionCursor - 1) + text.substring(positionCursor));
        this.setCursorPos(textArea, positionCursor - 1);
        break;
      case "Del":
      case "Delete":
        textArea.value =
          text.slice(0, positionCursor) + text.substring(positionCursor + 1);
        this.setCursorPos(textArea, positionCursor);
        break;
      case "Enter":
        textArea.value += "\n";
        break;
      case "◄":
        positionCursor != 0 && this.setCursorPos(textArea, positionCursor - 1);
        break;
      case "►":
        this.setCursorPos(textArea, positionCursor + 1);
        break;
      case "CapsLock":
      case "Shift":
      case "Ctrl":
      case "Control":
      case "Win":
      case "Alt":
        //NOOP
        break;
      default:
        textArea.value =
          text.slice(0, positionCursor) +
          keyValue +
          text.substring(positionCursor);
        this.setCursorPos(textArea, positionCursor + 1);
        break;
    }
  };

  setCaretPosition = () => {
    this.position = this.getCaretPos(document.querySelector(".textarea"));
  };

  getCaretPos = obj => {
    obj.focus();
    if (obj.selectionStart) return obj.selectionStart;
    else if (document.selection) {
      var sel = document.selection.createRange();
      var clone = sel.duplicate();
      sel.collapse(true);
      clone.moveToElementText(obj);
      clone.setEndPoint("EndToEnd", sel);
      return clone.text.length;
    }
    return 0;
  };

  setCursorPos = (input, start) => {
    let end = start;
    if ("selectionStart" in input) {
      setTimeout(function() {
        input.selectionStart = start;
        input.selectionEnd = end;
      }, 1);
    } else if (input.createTextRange) {
      var rng = input.createTextRange();
      rng.moveStart("character", start);
      rng.collapse();
      rng.moveEnd("character", end - start);
      rng.select();
    }
  };
}
class VirtualKeyBoard {
  constructor(options) {
    this.language = options.lang;
    this.caseStatus = options.case;
    this.letterCase = options.letterCase;
  }

  create = () => {
    let keyboardBlock = document.createElement("div");
    keyboardBlock.classList.add("keyboard");

    arrayKeys.forEach(arrayRow => {
      let rowBlock = document.createElement("div");
      arrayRow.forEach(element => {
        let button = document.createElement("button");
        button.classList.add("key", "button", element.keyCode);
        button.innerHTML = this.buttonValue(element);
        special.indexOf(element.keyCode) != -1 &&
          button.classList.add("special");
        rowBlock.appendChild(button);
      });
      keyboardBlock.appendChild(rowBlock);
    });
    document.body.appendChild(keyboardBlock);
  };

  mouseDownHandler = event => {
    let keyValue = event.target.innerText;
    event.target.classList.remove("key");
    event.target.classList.add("activeButton");
    switch (keyValue) {
      case "CapsLock":
        this.eventCaps();
        break;
      case "Shift":
        this.eventShift();
        break;
    }
    return keyValue;
  };

  mouseUpHandler = (event, keyValue) => {
    event.target.classList.remove("activeButton");
    event.target.classList.add("key");
    switch (keyValue) {
      case "Shift":
        this.eventShift();
        break;
    }
  };

  keyDownHandler = event => {
    event.target.classList.remove("key");
    switch (event.key) {
      case "Shift":
        this.eventShift();
        break;
      case "CapsLock":
        this.eventCaps();
        break;
    }
  };

  keyUpHandler = event => {
    event.target.tagName == "BUTTON" && event.target.classList.add("key");
    switch (event.key) {
      case "Shift":
        this.eventShift();
        break;
    }
  };

  setLanguage = () => {
    this.language = this.language == "eng" ? "rus" : "eng";
    localStorage.setItem("lang", this.language);
    let buttonArray = Array.from(document.querySelectorAll(".button"));
    for (let i = 0; i < buttonArray.length; i++) {
      buttonArray[i].innerHTML = this.buttonValue(arrayForButton[i]);
    }
  };

  activateButton = keyObject => {
    document.querySelector(`.${keyObject.code}`).classList.add("activeButton");
  };
  deActivateButton = keyObject => {
    document
      .querySelector(`.${keyObject.code}`)
      .classList.remove("activeButton");
  };

  eventCaps = () => {
    let buttonCase = Array.from(document.querySelectorAll(".button"));
    let caps = document.querySelector(".CapsLock");
    caps.classList.remove("active");
    caps.classList.toggle("caps");
    this.editLaterCase();
    for (let i = 0; i < buttonCase.length; i++) {
      buttonCase[i].innerHTML = this.buttonValue(arrayForButton[i]);
    }
  };

  eventShift = () => {
    let buttonCase = Array.from(document.querySelectorAll(".button"));
    this.caseStatus =
      this.caseStatus == "up"
        ? (this.caseStatus = "down")
        : (this.caseStatus = "up");
    this.editLaterCase();
    for (let i = 0; i < buttonCase.length; i++) {
      buttonCase[i].innerHTML = this.buttonValue(arrayForButton[i]);
    }
  };

  buttonValue = element => {
    switch (this.language) {
      case "eng":
        switch (this.caseStatus) {
          case "up":
            return this.englElementValue(element, "up");
          case "down":
            return this.englElementValue(element);
        }
      case "rus":
        switch (this.caseStatus) {
          case "up":
            return this.rusElementValue(element, "up");
          case "down":
            return this.rusElementValue(element);
        }
    }
  };

  editLaterCase = () => {
    this.letterCase =
      this.letterCase == "over"
        ? (this.letterCase = "under")
        : (this.letterCase = "over");
  };
  editLaterCase = () => {
    this.letterCase =
      this.letterCase == "over"
        ? (this.letterCase = "under")
        : (this.letterCase = "over");
  };
  rusElementValue = (element, caseRus) => {
    if (element.rus.letter) {
      switch (this.letterCase) {
        case "over":
          return element.rus.up;
        case "under":
          return element.rus.down;
      }
    } else {
      return caseRus == "up" ? element.eng.up : element.eng.down;
    }
  };
  englElementValue = (element, caseEng) => {
    if (element.eng.letter) {
      switch (this.letterCase) {
        case "over":
          return element.eng.up;
        case "under":
          return element.eng.down;
      }
    } else {
      return caseEng == "up" ? element.eng.up : element.eng.down;
    }
  };
  messegeBlock = () => {
    let os = document.createElement("p");
    os.innerHTML = "Клавиатура создана в операционной системе Windows";
    let lang = document.createElement("p");
    lang.innerHTML = "Переключение языка комбинацией: Alt + Shift";
    document.body.append(os, lang);
  };
}
