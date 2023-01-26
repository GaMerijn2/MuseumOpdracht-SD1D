const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image()
        image.src = './img/Ship-Player.png'
        image.onload = () => {

            this.image = image
            this.width = image.width  
            this.height = image.height 
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }    
        }
    }

    draw() {
       // c.fillStyle = 'red'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
       
        c.drawImage(
            this.image, 
            this.position.x,
            this.position.y, 
            this.width, 
            this.height
        )
    }
    
    update() {
        if (this.image) {
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}

const player = new Player()
player.draw()

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
}

animate()

addEventListener('keydown', ({key}) => {
    console.log('key')
    switch (key){
        case 'a':
            console.log('left')
            break
        case 'd':
            console.log('right')
            break
        case ' ':
            console.log('space')
            break

    }
})