/**
 * Debugger for mtdef.
 * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
 *
 * Needs the following files:
 *
 * HTML files.
 * @file HTML/NewCanvas.js
 * @file HTML/UpdateCvs.js
 */
const DEBUG = {
  debug: false,
  coOut: true,
  caOut: false,
  out: ["", ""],
  clr: ["#0BF", "#05E", "#F80", "#B09", "red"],
  count: [],
  cvs: undefined,
  /**
   * Basic settings of the thisger.
   * @author TessavWalstijn.GitHub: https: //github.com/TessavWalstijn
   * @param {boolean} DebugToConsole this to console
   * @param {boolean} DebugToCanvas this to canvas
   * @param {number} DebugLines Amount of this lines in canvas.
   */
  SetDebug(DebugToConsole = true, DebugToCanvas = true, DebugLines = 24) {
    this.debug = DebugToCanvas;
    this.coOut = DebugToConsole;
    this.caOut = DebugToCanvas;
    this.max = DebugLines * 2 + 4;
  },
  /**
   * Color settings of the thisger.
   * Set false if you dont want to set the color.
   * @author TessavWalstijn.GitHub: https: //github.com/TessavWalstijn
   * @param {string} LogColor Set the Log color.
   * @param {string} InfoColor Set the Info color.
   * @param {string} WarnColor Set the Warn color.
   * @param {string} thisColor Set the this color.
   * @param {string} ErrorColor Set the Error color.
   */
  SetColors(LogColor, InfoColor, WarnColor, thisColor, ErrorColor) {
    let clr = [],
      m = clr.length;
    clr[0] = LogColor;
    clr[1] = InfoColor;
    clr[2] = WarnColor;
    clr[3] = thisColor;
    clr[4] = ErrorColor;
    for (let i = 0; i < m; i++) {
      if (typeof clr[i] === "string") this.clr[i] = clr[i];
    }
  },
  /**
   * Draw the canvas of Debug
   * @author TessavWalstijn.GitHub: https: //github.com/TessavWalstijn
   */
  Draw() {
    if (this.cvs !== undefined) {
      let runtime = "runtime in sec: " + Window.runTime / 1000,
        fps = " fps: " + Math.floor(1 / Window.deltaTime * 1000),
        size = "width: " + Window.width + " height: " + Window.height + fps,
        mspf = "mspf: " + Window.deltaTime;
      this.cvs.ctx.font = "10px Arial";
      this.cvs.ctx.fillStyle = "red";
      this.cvs.ctx.fillText(runtime, 20, 25);
      this.cvs.ctx.fillText(size, 20, 35);
      this.cvs.ctx.fillText(mspf, 20, 45);
      if (this.caOut) {
        if (this.out.length >= 4) {
          let mi = this.out.length;
          for (let i = mi; i > 0; i = i - 2) {
            if (this.out[i] !== undefined && this.out.length + 2 >= i) {
              this.cvs.ctx.fillStyle = this.out[i];
              this.cvs.ctx.fillText(this.out[i + 1], 20, i * 5 + 45);
            }
          }
        }
      }
    }
  },
  Cout(re, out) {
    let r = re,
      o = out;
    if (this.coOut) {
      switch (r) {
        case "log":
          console.log(o);
          break;
        case "info":
          console.info(o);
          break;
        case "warn":
          console.warn(o);
          break;
        case "debug":
          console.debug(o);
          break;
        case "err":
          console.error(o);
          break;
      }
    }

    if (this.out.length >= this.max) {
      this.out.splice(2, 2);
    }
  },
  Check(out, clr, re) {
    if (this.caOut) {
      this.out.push(this.clr[clr]);
      this.out.push(out);
    }
    this.Cout(re, out);
  },
  Log(log) {
    this.Check(log, 0, "log");
  },
  Info(info) {
    this.Check(info, 1, "info");
  },
  Warn(warn) {
    this.Check(warn, 2, "warn");
  },
  Debug(debug) {
    this.Check(debug, 3, "debug");
  },
  Error(error) {
    this.Check(error, 4, "err");
  }
};
