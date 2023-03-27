const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2

class Sprite {
  constructor({position, velocity}) {
    this.position = position
    this.velocity = velocity
    this.height = 50
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 50, this.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.lastKey

    if (this.position.y + this.height +this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else this.velocity.y += gravity
  }
}

const player = new Sprite({
  position: {
  x: 0,
  y: 0
  },
  velocity: {
    x: 0,
    y: 0
  }

})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  }
}
let lastKey

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()

  player.velocity.x = 0
  
  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x =-5
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
  }
}

animate()

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = true
      player.lastKey = 'd'
      break
    case 'a':
      keys.a.pressed = true
      player.lastKey = 'a'
      break
    case 'w':
      player.velocity.y = -10
      break
  }
  console.log(event.key)
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }
  console.log(event.key)
})