const arrayKeys = [
  [
    {
      keyCode: "Backquote",
      eng: {
        down: "`",
        up: "~"
      },
      rus: {
        down: "ё",
        up: "Ё",
        letter: true
      }
    },
    {
      keyCode: "Digit1",
      eng: {
        down: "1",
        up: "!"
      },
      rus: {
        down: "1",
        up: "!"
      }
    },
    {
      keyCode: "Digit2",
      eng: {
        down: "2",
        up: "@"
      },
      rus: {
        down: "2",
        up: '"'
      }
    },
    {
      keyCode: "Digit3",
      eng: {
        down: "3",
        up: "#"
      },
      rus: {
        down: "3",
        up: "№"
      }
    },
    {
      keyCode: "Digit4",
      eng: {
        down: "4",
        up: "$"
      },
      rus: {
        down: "4",
        up: ";"
      }
    },
    {
      keyCode: "Digit5",
      eng: {
        down: "5",
        up: "%"
      },
      rus: {
        down: "5",
        up: "%"
      }
    },
    {
      keyCode: "Digit6",
      eng: {
        down: "6",
        up: "^"
      },
      rus: {
        down: "6",
        up: ":"
      }
    },
    {
      keyCode: "Digit7",
      eng: {
        down: "7",
        up: "&"
      },
      rus: {
        down: "7",
        up: "?"
      }
    },
    {
      keyCode: "Digit8",
      eng: {
        down: "8",
        up: "*"
      },
      rus: {
        down: "8",
        up: "*"
      }
    },
    {
      keyCode: "Digit9",
      eng: {
        down: "9",
        up: "("
      },
      rus: {
        down: "9",
        up: "("
      }
    },
    {
      keyCode: "Digit0",
      eng: {
        down: "0",
        up: ")"
      },
      rus: {
        down: "0",
        up: ")"
      }
    },
    {
      keyCode: "Minus",
      eng: {
        down: "-",
        up: "_"
      },
      rus: {
        down: "-",
        up: "_"
      }
    },
    {
      keyCode: "Equal",
      eng: {
        down: "=",
        up: "+"
      },
      rus: {
        down: "=",
        up: "+"
      }
    },
    {
      keyCode: "Backspace",
      eng: {
        down: "Backspace",
        up: "Backspace"
      },
      rus: {
        down: "Backspace",
        up: "Backspace"
      }
    }
  ],
  [
    {
      keyCode: "Tab",
      eng: {
        down: "Tab",
        up: "Tab"
      },
      rus: {
        down: "Tab",
        up: "Tab"
      }
    },
    {
      keyCode: "KeyQ",
      eng: {
        down: "q",
        up: "Q",
        letter: true
      },
      rus: {
        down: "й",
        up: "Й",
        letter: true
      }
    },
    {
      keyCode: "KeyW",
      eng: {
        down: "w",
        up: "W",
        letter: true
      },
      rus: {
        down: "ц",
        up: "Ц",
        letter: true
      }
    },
    {
      keyCode: "KeyE",
      eng: {
        down: "e",
        up: "E",
        letter: true
      },
      rus: {
        down: "у",
        up: "У",
        letter: true
      }
    },
    {
      keyCode: "KeyR",
      eng: {
        down: "r",
        up: "R",
        letter: true
      },
      rus: {
        down: "к",
        up: "К",
        letter: true
      }
    },
    {
      keyCode: "KeyT",
      eng: {
        down: "t",
        up: "T",
        letter: true
      },
      rus: {
        down: "е",
        up: "Е",
        letter: true
      }
    },
    {
      keyCode: "KeyY",
      eng: {
        down: "y",
        up: "Y",
        letter: true
      },
      rus: {
        down: "н",
        up: "Н",
        letter: true
      }
    },
    {
      keyCode: "KeyU",
      eng: {
        down: "u",
        up: "U",
        letter: true
      },
      rus: {
        down: "г",
        up: "Г",
        letter: true
      }
    },
    {
      keyCode: "KeyI",
      eng: {
        down: "i",
        up: "I",
        letter: true
      },
      rus: {
        down: "ш",
        up: "Ш",
        letter: true
      }
    },
    {
      keyCode: "KeyO",
      eng: {
        down: "o",
        up: "O",
        letter: true
      },
      rus: {
        down: "щ",
        up: "Щ",
        letter: true
      }
    },
    {
      keyCode: "KeyP",
      eng: {
        down: "p",
        up: "P",
        letter: true
      },
      rus: {
        down: "з",
        up: "З",
        letter: true
      }
    },
    {
      keyCode: "BracketLeft",
      eng: {
        down: "[",
        up: "{"
      },
      rus: {
        down: "х",
        up: "Х",
        letter: true
      }
    },
    {
      keyCode: "BracketRight",
      eng: {
        down: "]",
        up: "}"
      },
      rus: {
        down: "ъ",
        up: "Ъ",
        letter: true
      }
    },
    {
      keyCode: "Backslash",
      eng: {
        down: "\\",
        up: "|"
      },
      rus: {
        down: "\\",
        up: "/"
      }
    },
    {
      keyCode: "Delete",
      eng: {
        down: "Del",
        up: "Del"
      },
      rus: {
        down: "Del",
        up: "Del"
      }
    }
  ],
  [
    {
      keyCode: "CapsLock",
      eng: {
        down: "CapsLock",
        up: "CapsLock"
      },
      rus: {
        down: "CapsLock",
        up: "CapsLock"
      }
    },
    {
      keyCode: "KeyA",
      eng: {
        down: "a",
        up: "A",
        letter: true
      },
      rus: {
        down: "ф",
        up: "Ф",
        letter: true
      }
    },
    {
      keyCode: "KeyS",
      eng: {
        down: "s",
        up: "S",
        letter: true
      },
      rus: {
        down: "ы",
        up: "Ы",
        letter: true
      }
    },
    {
      keyCode: "KeyD",
      eng: {
        down: "d",
        up: "D",
        letter: true
      },
      rus: {
        down: "в",
        up: "В",
        letter: true
      }
    },
    {
      keyCode: "KeyF",
      eng: {
        down: "f",
        up: "F",
        letter: true
      },
      rus: {
        down: "а",
        up: "А",
        letter: true
      }
    },
    {
      keyCode: "KeyG",
      eng: {
        down: "g",
        up: "G",
        letter: true
      },
      rus: {
        down: "п",
        up: "П",
        letter: true
      }
    },
    {
      keyCode: "KeyH",
      eng: {
        down: "h",
        up: "H",
        letter: true
      },
      rus: {
        down: "р",
        up: "Р",
        letter: true
      }
    },
    {
      keyCode: "KeyJ",
      eng: {
        down: "j",
        up: "J",
        letter: true
      },
      rus: {
        down: "о",
        up: "О",
        letter: true
      }
    },
    {
      keyCode: "KeyK",
      eng: {
        down: "k",
        up: "K",
        letter: true
      },
      rus: {
        down: "л",
        up: "Л",
        letter: true
      }
    },
    {
      keyCode: "KeyL",
      eng: {
        down: "l",
        up: "L",
        letter: true
      },
      rus: {
        down: "д",
        up: "Д",
        letter: true
      }
    },
    {
      keyCode: "Semicolon",
      eng: {
        down: ";",
        up: ":"
      },
      rus: {
        down: "ж",
        up: "Ж",
        letter: true
      }
    },
    {
      keyCode: "Quote",
      eng: {
        down: "'",
        up: '"'
      },
      rus: {
        down: "э",
        up: "Э",
        letter: true
      }
    },
    {
      keyCode: "Enter",
      eng: {
        down: "Enter",
        up: "Enter"
      },
      rus: {
        down: "Enter",
        up: "Enter"
      }
    }
  ],
  [
    {
      keyCode: "ShiftLeft",
      eng: {
        down: "Shift",
        up: "Shift"
      },
      rus: {
        down: "Shift",
        up: "Shift"
      }
    },
    {
      keyCode: "KeyZ",
      eng: {
        down: "z",
        up: "Z",
        letter: true
      },
      rus: {
        down: "я",
        up: "Я",
        letter: true
      }
    },
    {
      keyCode: "KeyX",
      eng: {
        down: "x",
        up: "X",
        letter: true
      },
      rus: {
        down: "ч",
        up: "Ч",
        letter: true
      }
    },
    {
      keyCode: "KeyC",
      eng: {
        down: "c",
        up: "C",
        letter: true
      },
      rus: {
        down: "с",
        up: "С",
        letter: true
      }
    },
    {
      keyCode: "KeyV",
      eng: {
        down: "v",
        up: "V",
        letter: true
      },
      rus: {
        down: "м",
        up: "М",
        letter: true
      }
    },
    {
      keyCode: "KeyB",
      eng: {
        down: "b",
        up: "B",
        letter: true
      },
      rus: {
        down: "и",
        up: "И",
        letter: true
      }
    },
    {
      keyCode: "KeyN",
      eng: {
        down: "n",
        up: "N",
        letter: true
      },
      rus: {
        down: "т",
        up: "Т",
        letter: true
      }
    },
    {
      keyCode: "KeyM",
      eng: {
        down: "m",
        up: "M",
        letter: true
      },
      rus: {
        down: "ь",
        up: "Ь",
        letter: true
      }
    },
    {
      keyCode: "Comma",
      eng: {
        down: ",",
        up: "<"
      },
      rus: {
        down: "б",
        up: "Б",
        letter: true
      }
    },
    {
      keyCode: "Period",
      eng: {
        down: ".",
        up: ">"
      },
      rus: {
        down: "ю",
        up: "Ю",
        letter: true
      }
    },
    {
      keyCode: "Slash",
      eng: {
        down: "/",
        up: "?"
      },
      rus: {
        down: ".",
        up: ","
      }
    },
    {
      keyCode: "ArrowUp",
      eng: {
        down: "▲",
        up: "▲"
      },
      rus: {
        down: "▲",
        up: "▲"
      }
    },
    {
      keyCode: "ShiftRight",
      eng: {
        down: "Shift",
        up: "Shift"
      },
      rus: {
        down: "Shift",
        up: "Shift"
      }
    }
  ],
  [
    {
      keyCode: "ControlLeft",
      eng: {
        down: "Ctrl",
        up: "Ctrl"
      },
      rus: {
        down: "Ctrl",
        up: "Ctrl"
      }
    },
    {
      keyCode: "MetaLeft",
      eng: {
        down: "Win",
        up: "Win"
      },
      rus: {
        down: "Win",
        up: "Win"
      }
    },
    {
      keyCode: "AltLeft",
      eng: {
        down: "Alt",
        up: "Alt"
      },
      rus: {
        down: "Alt",
        up: "Alt"
      }
    },
    {
      keyCode: "Space",
      eng: {
        down: "&nbsp",
        up: "&nbsp"
      },
      rus: {
        down: "&nbsp",
        up: "&nbsp"
      }
    },
    {
      keyCode: "AltRight",
      eng: {
        down: "Alt",
        up: "Alt"
      },
      rus: {
        down: "Alt",
        up: "Alt"
      }
    },
    {
      keyCode: "ArrowLeft",
      eng: {
        down: "◄",
        up: "◄"
      },
      rus: {
        down: "◄",
        up: "◄"
      }
    },
    {
      keyCode: "ArrowDown",
      eng: {
        down: "▼",
        up: "▼"
      },
      rus: {
        down: "▼",
        up: "▼"
      }
    },
    {
      keyCode: "ArrowRight",
      eng: {
        down: "►",
        up: "►"
      },
      rus: {
        down: "►",
        up: "►"
      }
    },
    {
      keyCode: "ControlRight",
      eng: {
        down: "Ctrl",
        up: "Ctrl"
      },
      rus: {
        down: "Ctrl",
        up: "Ctrl"
      }
    }
  ]
];

const arrayForButton = arrayKeys[0].concat(
  arrayKeys[1],
  arrayKeys[2],
  arrayKeys[3],
  arrayKeys[4]
);

const special = [
  "Backspace",
  "Tab",
  "Enter",
  "CapsLock",
  "ShiftLeft",
  "ShiftRight",
  "AltLeft",
  "AltRight",
  "ControlLeft",
  "ControlRight",
  "MetaLeft",
  "Delete",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ArrowUp"
];
