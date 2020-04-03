document.addEventListener("DOMContentLoaded", () => {
  let textArea = new TextArea();
  let virtualKeyBoard = new VirtualKeyBoard();

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
    virtualKeyBoard.mouseUpHandler(event);
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
    return event.target.innerText;
  };

  mouseUpHandler = () => {};

  generateSpanBlock = objectKey => {
    let spanBlock = document.createDocumentFragment("div");
    let spanArray = [];

    for (let i = 0; i < 4; i++) {
      spanArray.push(document.createElement("span"));
      spanArray[i].classList.add("span");
      if (i != 1) {
        spanArray[i].classList.add("hidden");
      }
    }

    spanArray[0].innerHTML = objectKey.eng.up;
    spanArray[1].innerHTML = objectKey.eng.down;
    spanArray[2].innerHTML = objectKey.rus.up;
    spanArray[3].innerHTML = objectKey.rus.down;

    spanArray.forEach(element => {
      spanBlock.appendChild(element);
    });
    return spanBlock;
  };
}

class RealKeyBoard {}
