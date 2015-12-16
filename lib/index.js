/**
 * Expose keycodes
 */

var keycodes = module.exports = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  16: 'shift',
  17: 'ctrl',
  18: 'alt',
  19: 'pause',
  20: 'caps_lock',
  27: 'esc',
  32: 'space',
  33: 'page_up',
  34: 'page_down',
  35: 'end',
  36: 'home',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  45: 'insert',
  46: 'delete',
  91: 'command',
  93: 'right_click',
  106: 'numpad_*',
  107: 'numpad_+',
  109: 'numpad_-',
  110: 'numpad_.',
  111: 'numpad_/',
  144: 'num_lock',
  145: 'scroll_lock',
  182: 'my_computer',
  183: 'my_calculator',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  191: '/',
  192: '`',
  219: '[',
  220: '\\',
  221: ']',
  222: "'"
}

// lower case chars
for (var i = 97; i < 123; i++) {
  keycodes[i - 32] = String.fromCharCode(i)
}

// numbers
for (var j = 48; j < 58; j++) {
  keycodes[j] = j - 48
}

// function keys
for (var k = 1; k < 13; k++) {
  keycodes[k + 111] = 'f' + k
}

// numpad keys
for (var l = 0; l < 10; l++) {
  keycodes[l + 96] = 'numpad_' + l
}
