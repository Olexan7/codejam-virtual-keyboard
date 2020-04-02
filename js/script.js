document.addEventListener("DOMContentLoaded", () => {
  createTextarea();
  createKeyboardBlock();
});

createTextarea = () => {
  let textBlock = document.createElement("textarea");
  textBlock.classList.add("textarea");

  let divBlock = document.createElement("div");
  divBlock.appendChild(textBlock);
  document.body.appendChild(divBlock);
};

createKeyboardBlock = () => {
  let keyboardBlock = document.createElement("div");

  generateSpanBlock = objectKey => {
    let spanBlock = document.createDocumentFragment("div");
    let spanArray = [];

    for (let i = 0; i < 4; i++) {
      spanArray.push(document.createElement("span"));
      spanArray[i].classList.add("span");
      /*if (i % 2 == 0) {
        spanArray[i].classList.add("hidden");
      }*/
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

  arrayKeys.forEach(arrayRow => {
    let rowBlock = document.createElement("div");
    arrayRow.forEach(element => {
      let button = document.createElement("button");
      button.classList.add("button");
      button.appendChild(generateSpanBlock(element));
      rowBlock.appendChild(button);
    });
    keyboardBlock.appendChild(rowBlock);
  });
  document.body.appendChild(keyboardBlock);
};
