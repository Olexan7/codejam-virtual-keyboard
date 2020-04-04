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

  //let flagNoRepeat = true;
  html.addEventListener("keydown", event => {
    if (!event.repeat) {
      if (event.ctrlKey && event.shiftKey) {
        virtualKeyBoard.setLanguage();
      }
      if (checkValidateButton(event.code)) {
        virtualKeyBoard.keyDownHandler(event);
        virtualKeyBoard.activateButton(event);
        let keyValue = document.querySelector(`.${event.code}`).innerText;
        textArea.displayValue(keyValue);
      }
    }
  });
  html.addEventListener("keyup", event => {
    event.repeat = false;
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
    switch (keyValue) {
      case "Tab":
        textArea.value += "    ";
        break;
      case "Backspace":
        textArea.value = textArea.value.slice(0, -1);
        break;
      case "Del":
      case "Delete":
        /***NOT READY */
        let positionCursor = textArea.selectionEnd;
        let start = textArea.value.substr(0, positionCursor);
        let end = textArea.value.substr(positionCursor + 1);
        textArea.value = start + end;
        break;
      case "Enter":
        textArea.value += "\n";
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
        textArea.value += keyValue;
        break;
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
        button.classList.add("button", element.keyCode);
        button.innerHTML = this.buttonValue(element);
        rowBlock.appendChild(button);
      });
      keyboardBlock.appendChild(rowBlock);
    });
    document.body.appendChild(keyboardBlock);
  };

  mouseDownHandler = event => {
    let keyValue = event.target.innerText;
    event.target.classList.add("active");
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
    event.target.classList.remove("active");
    switch (keyValue) {
      case "Shift":
        this.eventShift();
        break;
    }
  };

  keyDownHandler = event => {
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
    let buttonCase = Array.from(document.querySelectorAll(".button"));
    switch (event.key) {
      case "Shift":
        this.eventShift(buttonCase);
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
    document.querySelector(`.${keyObject.code}`).classList.add("active");
  };
  deActivateButton = keyObject => {
    document.querySelector(`.${keyObject.code}`).classList.remove("active");
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
            return this.englElementValue(element);
          case "down":
            return this.englElementValue(element);
        }
      case "rus":
        switch (this.caseStatus) {
          case "up":
            return this.rusElementValue(element);
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
  rusElementValue = element => {
    if (element.rus.letter) {
      switch (this.letterCase) {
        case "over":
          return element.rus.up;
        case "under":
          return element.rus.down;
      }
    } else {
      return element.rus.down;
    }
  };
  englElementValue = element => {
    if (element.eng.letter) {
      switch (this.letterCase) {
        case "over":
          return element.eng.up;
        case "under":
          return element.eng.down;
      }
    } else {
      return element.eng.down;
    }
  };
}
