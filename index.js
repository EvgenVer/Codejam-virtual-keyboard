/* global document */
const keys = [
  {
    ruKey: 'Ё',
    enKey: '`',
    enSymbolKey: '~',
    eventCode: 'Backquote',
    className: 'ru_letter',
  },
  {
    ruKey: '1',
    enKey: '1',
    enSymbolKey: '!',
    ruSymbolKey: '!',
    eventCode: 'Digit1',
    className: 'digit',
  },
  {
    ruKey: '2',
    enKey: '2',
    enSymbolKey: '@',
    ruSymbolKey: '"',
    eventCode: 'Digit2',
    className: 'digit',
  },
  {
    ruKey: '3',
    enKey: '3',
    enSymbolKey: '#',
    ruSymbolKey: '№',
    eventCode: 'Digit3',
    className: 'digit',
  },
  {
    ruKey: '4',
    enKey: '4',
    enSymbolKey: '$',
    ruSymbolKey: ';',
    eventCode: 'Digit4',
    className: 'digit',
  },
  {
    ruKey: '5',
    enKey: '5',
    enSymbolKey: '%',
    ruSymbolKey: '%',
    eventCode: 'Digit5',
    className: 'digit',
  },
  {
    ruKey: '6',
    enKey: '6',
    enSymbolKey: '^',
    ruSymbolKey: ':',
    eventCode: 'Digit6',
    className: 'digit',
  },
  {
    ruKey: '7',
    enKey: '7',
    enSymbolKey: '&',
    ruSymbolKey: '?',
    eventCode: 'Digit7',
    className: 'digit',
  },
  {
    ruKey: '8',
    enKey: '8',
    enSymbolKey: '*',
    ruSymbolKey: '*',
    eventCode: 'Digit8',
    className: 'digit',
  },
  {
    ruKey: '9',
    enKey: '9',
    enSymbolKey: '(',
    ruSymbolKey: '(',
    eventCode: 'Digit9',
    className: 'digit',
  },
  {
    ruKey: '0',
    enKey: '0',
    enSymbolKey: ')',
    ruSymbolKey: ')',
    eventCode: 'Digit0',
    className: 'digit',
  },
  {
    ruKey: '-',
    enKey: '-',
    enSymbolKey: '_',
    ruSymbolKey: '_',
    eventCode: 'Minus',
    className: 'digit',
  },
  {
    ruKey: '=',
    enKey: '=',
    enSymbolKey: '+',
    ruSymbolKey: '+',
    eventCode: 'Equal',
    className: 'digit',
  },
  {
    Key: 'Backspace',
    eventCode: 'Backspace',
    className: 'func backspace',
  },
  {
    Key: 'Tab',
    eventCode: 'Tab',
    className: 'func tab',
  },
  {
    ruKey: 'Й',
    enKey: 'Q',
    eventCode: 'KeyQ',
    className: 'letter',
  },
  {
    ruKey: 'Ц',
    enKey: 'W',
    eventCode: 'KeyW',
    className: 'letter',
  },
  {
    ruKey: 'У',
    enKey: 'E',
    eventCode: 'KeyE',
    className: 'letter',
  },
  {
    ruKey: 'К',
    enKey: 'R',
    eventCode: 'KeyR',
    className: 'letter',
  },
  {
    ruKey: 'Е',
    enKey: 'T',
    eventCode: 'KeyT',
    className: 'letter',
  },
  {
    ruKey: 'Н',
    enKey: 'Y',
    eventCode: 'KeyY',
    className: 'letter',
  },
  {
    ruKey: 'Г',
    enKey: 'U',
    eventCode: 'KeyU',
    className: 'letter',
  },
  {
    ruKey: 'Ш',
    enKey: 'I',
    eventCode: 'KeyI',
    className: 'letter',
  },
  {
    ruKey: 'Щ',
    enKey: 'O',
    eventCode: 'KeyO',
    className: 'letter',
  },
  {
    ruKey: 'З',
    enKey: 'P',
    eventCode: 'KeyP',
    className: 'letter',
  },
  {
    ruKey: 'Х',
    enKey: '[',
    enSymbolKey: '{',
    eventCode: 'BracketLeft',
    className: 'ru_letter',
  },
  {
    ruKey: 'Ъ',
    enKey: ']',
    enSymbolKey: '}',
    eventCode: 'BracketRight',
    className: 'ru_letter',
  },
  {
    ruKey: '\\',
    enKey: '\\',
    enSymbolKey: '|',
    ruSymbolKey: '/',
    eventCode: 'Backslash',
    className: 'digit',
  },
  {
    Key: 'Delete',
    eventCode: 'Delete',
    className: 'func delete',
  },
  {
    Key: 'CapsLock',
    eventCode: 'CapsLock',
    className: 'func capslock',
  },
  {
    ruKey: 'Ф',
    enKey: 'A',
    eventCode: 'KeyA',
    className: 'letter',
  },
  {
    ruKey: 'Ы',
    enKey: 'S',
    eventCode: 'KeyS',
    className: 'letter',
  },
  {
    ruKey: 'В',
    enKey: 'D',
    eventCode: 'KeyD',
    className: 'letter',
  },
  {
    ruKey: 'А',
    enKey: 'F',
    eventCode: 'KeyF',
    className: 'letter',
  },
  {
    ruKey: 'П',
    enKey: 'G',
    eventCode: 'KeyG',
    className: 'letter',
  },
  {
    ruKey: 'Р',
    enKey: 'H',
    eventCode: 'KeyH',
    className: 'letter',
  },
  {
    ruKey: 'О',
    enKey: 'J',
    eventCode: 'KeyJ',
    className: 'letter',
  },
  {
    ruKey: 'Л',
    enKey: 'K',
    eventCode: 'KeyK',
    className: 'letter',
  },
  {
    ruKey: 'Д',
    enKey: 'L',
    eventCode: 'KeyL',
    className: 'letter',
  },
  {
    ruKey: 'Ж',
    enKey: ';',
    enSymbolKey: ':',
    eventCode: 'Semicolon',
    className: 'ru_letter',
  },
  {
    ruKey: 'Э',
    enKey: "'",
    enSymbolKey: '"',
    eventCode: 'Quote',
    className: 'ru_letter',
  },
  {
    Key: 'Enter',
    eventCode: 'Enter',
    className: 'func enter',
  },
  {
    Key: 'Shift',
    eventCode: 'ShiftLeft',
    className: 'func shift',
  },
  {
    ruKey: 'Я',
    enKey: 'Z',
    eventCode: 'KeyZ',
    className: 'letter',
  },
  {
    ruKey: 'Ч',
    enKey: 'X',
    eventCode: 'KeyX',
    className: 'letter',
  },
  {
    ruKey: 'С',
    enKey: 'C',
    eventCode: 'KeyC',
    className: 'letter',
  },
  {
    ruKey: 'М',
    enKey: 'V',
    eventCode: 'KeyV',
    className: 'letter',
  },
  {
    ruKey: 'И',
    enKey: 'B',
    eventCode: 'KeyB',
    className: 'letter',
  },
  {
    ruKey: 'Т',
    enKey: 'N',
    eventCode: 'KeyN',
    className: 'letter',
  },
  {
    ruKey: 'Ь',
    enKey: 'M',
    eventCode: 'KeyM',
    className: 'letter',
  },
  {
    ruKey: 'Б',
    enKey: ',',
    enSymbolKey: '<',
    eventCode: 'Comma',
    className: 'ru_letter',
  },
  {
    ruKey: 'Ю',
    enKey: '.',
    enSymbolKey: '>',
    eventCode: 'Period',
    className: 'ru_letter',
  },
  {
    ruKey: '.',
    enKey: '/',
    enSymbolKey: '?',
    ruSymbolKey: ',',
    eventCode: 'Slash',
    className: 'digit',
  },
  {
    Key: 'Up',
    eventCode: 'ArrowUp',
    className: 'func up',
  },
  {
    Key: 'Shift',
    eventCode: 'ShiftRight',
    className: 'func shift',
  },
  {
    Key: 'Ctrl',
    eventCode: 'ControlLeft',
    className: 'func ctrl',
  },
  {
    Key: 'Win',
    eventCode: 'MetaLeft',
    className: 'func win',
  },
  {
    Key: 'Alt',
    eventCode: 'AltLeft',
    className: 'func altleft',
  },
  {
    Key: '',
    eventCode: 'Space',
    className: 'func space',
  },
  {
    Key: 'Alt',
    eventCode: 'AltRight',
    className: 'func altright',
  },
  {
    Key: 'Win',
    eventCode: 'MetaRight',
    className: 'func win',
  },
  {
    Key: 'Left',
    eventCode: 'ArrowLeft',
    className: 'func left',
  },
  {
    Key: 'Down',
    eventCode: 'ArrowDown',
    className: 'func down',
  },
  {
    Key: 'Right',
    eventCode: 'ArrowRight',
    className: 'func right',
  },
  {
    Key: 'Ctrl',
    eventCode: 'ControlRight',
    className: 'func ctrl',
  },
];

const input = document.createElement('textarea');
input.setAttribute('autofocus', '');
document.body.append(input);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

for (const i of keys) {
  const key = document.createElement('div');
  if (i.className === 'ru_letter') {
    key.className = i.className;
    key.classList.add(i.eventCode);
    key.innerHTML = `<span>${i.ruKey}</span>`;
  } else if (i.className === 'digit') {
    key.className = i.className;
    key.classList.add(i.eventCode);
    key.innerHTML = `<span>${i.ruSymbolKey}<br>${i.ruKey}</span>`;
  } else if (i.className === 'letter') {
    key.className = i.className;
    key.classList.add(i.eventCode);
    key.innerHTML = `<span>${i.ruKey}</span>`;
  } else {
    key.className = i.className;
    key.classList.add(i.eventCode);
    key.innerHTML = `<span>${i.Key}</span>`;
  }
  keyboard.append(key);
}

document.addEventListener('keydown', (event) => {
  for (let i of keys) {
    if (i.eventCode === event.code) {
      let selector = '.' + event.code;
      document.querySelector(selector).classList.add('press');
    }
  }
});
document.addEventListener('keyup', (event) => {
  for (let i of keys) {
    if (i.eventCode === event.code) {
      let selector = '.' + event.code;
      document.querySelector(selector).classList.remove('press');
    }
  }
})