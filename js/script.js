document.addEventListener("DOMContentLoaded", () => {
  let options = {
    lang: "eng",
    case: "down"
  };
  let textArea = new TextArea();
  let virtualKeyBoard = new VirtualKeyBoard(options);
  let realKeyBoard = new RealKeyBoard();

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

  html.addEventListener("keydown", event => {
    if (event.ctrlKey && event.shiftKey) {
      virtualKeyBoard.setLanguage();
    }

    virtualKeyBoard.keyDownHandler(event);
    let keyObject = realKeyBoard.getKeyCode(event);
    virtualKeyBoard.activateButton(keyObject);
    let keyValue = document.querySelector(`.${keyObject.code}`).innerText;
    textArea.displayValue(keyValue);
  });
  html.addEventListener("keyup", event => {
    virtualKeyBoard.keyUpHandler(event);
    let keyObject = realKeyBoard.getKeyCode(event);
    virtualKeyBoard.deActivateButton(keyObject);
  });
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
  //spanCase = Array.from(document.querySelectorAll(".case"));

  constructor(options) {
    this.language = options.lang;
    this.caseStatus = options.case;
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
        // button.appendChild(this.generateSpanBlock(element));
        rowBlock.appendChild(button);
      });
      keyboardBlock.appendChild(rowBlock);
    });
    document.body.appendChild(keyboardBlock);
  };

  mouseDownHandler = event => {
    let buttonCase = Array.from(document.querySelectorAll(".button"));
    let keyValue = event.target.innerText;
    event.target.classList.add("active");
    switch (keyValue) {
      case "CapsLock":
        this.eventCaps(buttonCase);
        break;
      case "Shift":
        this.eventShift(buttonCase);
        break;
    }
    return keyValue;
  };

  mouseUpHandler = (event, keyValue) => {
    //let spanCase = Array.from(document.querySelectorAll(".case"));
    let buttonCase = Array.from(document.querySelectorAll(".button"));
    event.target.classList.remove("active");
    switch (keyValue) {
      case "Shift":
        this.eventShift(buttonCase);
        break;
      case "CapsLock":
        // this.eventCapsDown(buttonCase);
        break;
    }
  };

  keyDownHandler = event => {
    let buttonCase = Array.from(document.querySelectorAll(".button"));
    switch (event.key) {
      case "Shift":
        this.eventShift(buttonCase);
        break;
      case "CapsLock":
        this.eventCaps(buttonCase);
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
    if (this.language == "eng") {
      this.language = "rus";
    } else if (this.language == "rus") {
      this.language = "eng";
    }
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

  eventCaps = buttonCase => {
    let caps = document.querySelector(".CapsLock");
    caps.classList.remove("active");
  };

  eventShift = buttonCase => {
    if (this.caseStatus == "up") {
      this.caseStatus = "down";
    } else if (this.caseStatus == "down") {
      this.caseStatus = "up";
    }
    for (let i = 0; i < buttonCase.length; i++) {
      buttonCase[i].innerHTML = this.buttonValue(arrayForButton[i]);
    }
  };

  buttonValue = element => {
    switch (this.language) {
      case "eng":
        switch (this.caseStatus) {
          case "up":
            return element.eng.up;
          case "down":
            return element.eng.down;
        }
      case "rus":
        switch (this.caseStatus) {
          case "up":
            return element.rus.up;
          case "down":
            return element.rus.down;
        }
    }
  };
}

class RealKeyBoard {
  getKeyCode = event => {
    return { key: event.key, code: event.code };
  };
}
