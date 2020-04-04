document.addEventListener("DOMContentLoaded", () => {
  let options = {
    lang: "eng",
    case: "down"
  };
  let textArea = new TextArea();
  let virtualKeyBoard = new VirtualKeyBoard(options);

  textArea.create();
  virtualKeyBoard.create();

  let keyboard = document.querySelector(".keyboard");
  let keyValue;
  keyboard.addEventListener("mousedown", event => {
    if (event.target.tagName == "BUTTON" || event.target.tagName == "SPAN") {
      keyValue = virtualKeyBoard.mouseDownHandler(event);
      textArea.displayValue(keyValue);
    }
  });
  keyboard.addEventListener("mouseup", event => {
    virtualKeyBoard.mouseUpHandler(event, keyValue);
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
        keyValue = "    ";
        break;
      case "Backspace":
        textArea.value = textArea.value.slice(0, -1);
        break;
      case "Del":
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
        button.appendChild(this.generateSpanBlock(element));
        rowBlock.appendChild(button);
      });
      keyboardBlock.appendChild(rowBlock);
    });
    document.body.appendChild(keyboardBlock);
  };

  mouseDownHandler = event => {
    let spanCase = Array.from(document.querySelectorAll(".case"));
    let keyValue = event.target.innerText;
    let keyBlock = document.querySelector(".keyboard");
    event.target.classList.add("active");
    switch (keyValue) {
      case "CapsLock":
      //this.eventCaps(keyBlock, spanCase);
      case "Shift":
        this.eventShift(spanCase);
    }
    return keyValue;
  };

  mouseUpHandler = (event, keyValue) => {
    let spanCase = Array.from(document.querySelectorAll(".case"));
    event.target.classList.remove("active");
    if (keyValue == "Shift") {
      this.eventShift(spanCase);
    } else if (keyValue == "CapsLock") {
      this.eventCaps(spanCase);
    }
  };

  eventCaps = (/*keyBlock,*/ spanCase) => {
    let caps = document.querySelector(".CapsLock");
    caps.classList.toggle("active");
    /*spanCase.forEach(element => {
      console.log(element);
      element.classList.toogle("hidden");
    });*/
  };

  eventShift = spanCase => {
    spanCase.forEach(element => {
      element.classList.toggle("hidden");
    });
  };

  generateSpanBlock = objectKey => {
    let spanBlock = document.createDocumentFragment("div");
    let spanEng = document.createElement("span");
    let spanRus = document.createElement("span");
    spanEng.classList.add("eng", "span");
    spanRus.classList.add("rus", "span");

    switch (this.language) {
      case "eng":
        spanRus.classList.add("hidden");
        break;
      case "rus":
        spanEng.classList.add("hidden");
        break;
    }

    let spanArray = [];
    for (let i = 0; i < 4; i++) {
      spanArray.push(document.createElement("span"));
      if (i % 2 == 0) {
        spanArray[i].classList.add(/*"up", */ "case");
      } else {
        spanArray[i].classList.add(/*"down",*/ "case");
      }
    }
    switch (this.caseStatus) {
      case "up":
        spanArray[1].classList.add("hidden");
        spanArray[3].classList.add("hidden");
        break;
      case "down":
        spanArray[0].classList.add("hidden");
        spanArray[2].classList.add("hidden");
        break;
    }

    spanArray[0].innerHTML = objectKey.eng.up;
    spanArray[1].innerHTML = objectKey.eng.down;
    spanEng.append(spanArray[0], spanArray[1]);

    spanArray[2].innerHTML = objectKey.rus.up;
    spanArray[3].innerHTML = objectKey.rus.down;
    spanRus.append(spanArray[2], spanArray[3]);

    spanBlock.append(spanEng, spanRus);
    return spanBlock;
  };
}

class RealKeyBoard {}
