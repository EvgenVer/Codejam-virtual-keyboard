/* eslint-env browser */
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

let lang = window.localStorage.lang ? window.localStorage.lang : 'RU';
let register = 'lower';

const input = document.createElement('textarea');
input.setAttribute('autofocus', '');
document.body.append(input);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

for (let i = 0; i < keys.length; i += 1) {
  const item = keys[i];
  const key = document.createElement('div');
  key.setAttribute('id', item.eventCode);
  if (item.className === 'ru_letter') {
    key.className = item.className;
    key.innerHTML = lang === 'RU' ? `<span>${item.ruKey.toLowerCase()}</span>` : `<span>${item.enKey}</span>`;
  } else if (item.className === 'digit') {
    key.className = item.className;
    key.innerHTML = lang === 'RU' ? `<span>${item.ruKey}</span>` : `<span>${item.enKey}</span>`;
  } else if (item.className === 'letter') {
    key.className = item.className;
    key.innerHTML = lang === 'RU' ? `<span>${item.ruKey.toLowerCase()}</span>` : `<span>${item.enKey.toLowerCase()}</span>`;
  } else {
    key.className = item.className;
    key.innerHTML = `<span>${item.Key}</span>`;
  }
  keyboard.append(key);
}

function handlerDown(event) {
  input.focus();
  for (let i = 0; i < keys.length; i += 1) {
    const item = keys[i];
    if (item.eventCode === event.code) {
      const elem = document.querySelector(`#${event.code}`);
      if (elem.className === 'letter' || elem.className === 'ru_letter' || elem.className === 'digit') {
        event.preventDefault();
        document.querySelector('textarea').value += elem.textContent;
      }
      elem.classList.add('press');
    }
  }
}

function handlerUp(event) {
  for (let i = 0; i < keys.length; i += 1) {
    const item = keys[i];
    if (item.eventCode === event.code) {
      document.querySelector(`#${event.code}`).classList.remove('press');
    }
  }
}

function changeRegister() {
  for (let i = 0; i < keys.length; i += 1) {
    const item = keys[i];
    const elem = document.querySelector(`#${item.eventCode}>span`);
    if (item.className === 'ru_letter') {
      if (register === 'lower') {
        elem.innerHTML = lang === 'RU' ? `${item.ruKey.toLowerCase()}` : `${item.enKey}`;
      } else {
        elem.innerHTML = lang === 'RU' ? `${item.ruKey}` : `${item.enSymbolKey}`;
      }
    } else if (item.className === 'digit') {
      if (register === 'lower') {
        elem.innerHTML = lang === 'RU' ? `${item.ruKey}` : `${item.enKey}`;
      } else {
        elem.innerHTML = lang === 'RU' ? `${item.ruSymbolKey}` : `${item.enSymbolKey}`;
      }
    } else if (item.className === 'letter') {
      if (register === 'lower') {
        elem.innerHTML = lang === 'RU' ? `${item.ruKey.toLowerCase()}` : `${item.enKey.toLowerCase()}`;
      } else {
        elem.innerHTML = lang === 'RU' ? `${item.ruKey}` : `${item.enKey}`;
      }
    }
  }
}

function changeLang(event) {
  if (event.altKey && event.ctrlKey) {
    if (lang === 'RU') {
      lang = 'EN';
      window.localStorage.setItem('lang', lang);
    } else {
      lang = 'RU';
      window.localStorage.setItem('lang', lang);
    }
    changeRegister();
  }
}

function CapsLock() {
  if (register === 'lower') {
    register = 'upper';
  } else {
    register = 'lower';
  }
  changeRegister();
  document.querySelector('#CapsLock').classList.toggle('press_caps');
}

function Shift() {
  if (register === 'lower') {
    register = 'upper';
  } else {
    register = 'lower';
  }
  changeRegister();
}

function handlerClickDown(event) {
  input.focus();
  const elem = event.target;
  console.log(elem);
  if (elem.classList.contains('ru_letter') || 
      elem.classList.contains('letter') || 
      elem.classList.contains('digit')) {
        const text = event.target.textContent;
        document.querySelector('textarea').value += text;
  }
}

document.addEventListener('keydown', handlerDown);
document.addEventListener('keydown', changeLang);
document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    CapsLock();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    Shift();
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    Shift();
  }
});
document.addEventListener('keyup', handlerUp);
document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    document.querySelector('textarea').value += '\t';
  }
});
document.querySelector('div.keyboard').addEventListener('mousedown', handlerClickDown);
