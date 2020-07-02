var KeyData = [];
var User = { x: 0, y: 0 };

for (let i = 0; i < 256; i++) KeyData[i] = { pressed: false, lastUp: 0 };

//controles if a key is pressed or released
window.addEventListener(
  "keydown",
  e => {
    KeyData[e.keyCode].pressed = true;
  },
  false
);
window.addEventListener(
  "keyup",
  e => {
    KeyData[e.keyCode].pressed = false;
  },
  false
);

//controles if a mousebutton is clicked
window.addEventListener(
  "mousedown",
  e => {
    // simple work around for mouse fix
    KeyData[1].pressed = true;
  },
  false
);
window.addEventListener(
  "mouseup",
  e => {
    // simple work around for mouse fix
    KeyData[1].pressed = false;
  },
  false
);

//controles if the mouse is moving
window.addEventListener(
  "mousemove",
  e => {
    User.x = e.clientX;
    User.y = e.clientY;
  },
  false
);
