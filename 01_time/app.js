/* global dayjs */
/* global Tweakpane */
/* global p5 */

const PARAMS = {
    size: 500,
    spacing: 20,
    spacingMinutes: 75,
    spacingSeconds: 75,
    color: '#eeeeee',
    colorHours: '#FF0000',
    colorMinutes: '#FF0000',
    colorSeconds: '#FFFFFF',
}


function getTime() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss Z')
}

function getTimeAsArray() {
  return [dayjs().format('HH'), dayjs().format('mm'), dayjs().format('ss')]
}

function loop() {
  let time = getTime()
  let app = document.querySelector('#app')
  app.innerHTML = time
  requestAnimationFrame(loop)
}

loop()

const sketch = (p) => {
  let canvas
  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight)
    Object.assign(canvas.elt.style, {
      position: 'sticky',
      top: '25px',
      left: '25px',
      zIndex: '-1',
    })
  }
  p.draw = () => {
    p.background(100)

    let [hours, minutes, seconds] = getTimeAsArray()
   

  
    /* minutes */
    p.push()
    p.fill(PARAMS.colorMinutes)
    for (let i = 0; i < minutes; i++) {
    p.triangle(i * PARAMS.spacingMinutes + -1000,-1000, 500, 1000)
    }
    p.pop()

    /* seconds */
    p.push()
    p.fill(PARAMS.colorSeconds)
    for (let i = 0; i < seconds; i++) {
      p.triangle(i * (PARAMS.spacingSeconds * 0.8) + -100, -100, 500, 1000)
    }
    p.reverse(seconds)
    p.pop()
    // p.ellipse(p.width * 0.5, p.height * 0.5, PARAMS.size, PARAMS.size)
  }
  p.windowResized = () => {
    canvas.resize(window.innerWidth, window.innerHeight)
  }
}


new p5(sketch);



