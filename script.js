let canvas;

function SetUpCanvas(AS) {
  // Aspect Ratio to canvas TESTING
  canvas = MTDEF.DOM.GetId("canvas");
  canvas.AS = new Aspect(AS);
  canvas.ctx = canvas.getContext("2d");
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.width = MTDEF.Window.size.width;
  canvas.height = MTDEF.Window.size.height;
  canvas.pos = new Point(0, 0);
}

function UpdateCanvas() {
  // Aspect Ratio to canvas TESTING
  canvas.AS.Update();
  canvas.width = canvas.AS.size.width;
  canvas.height = canvas.AS.size.height;
  canvas.pos = canvas.AS.pos;
  canvas.style.top = canvas.AS.pos.y + "px";
  canvas.style.left = canvas.AS.pos.x + "px";
}

function Start() {
  SetUpCanvas("16:9");

  // Matrix object TESTING
  let a = new Matrix(2, 3);
  a.Randomize(0, 10);
  a.Floor();
  let b = new Matrix(3, 2);
  b.Randomize(0, 10);
  b.Floor();

  console.table(a.matrix);
  console.table(b.matrix);

  console.table(a.Multiply(b).matrix);
  console.table(a.Transpose().matrix);
}

function Update() {
  UpdateCanvas();
  canvas.ctx.fillStyle = "#666";
  canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
}

MTDEF.Awake();
