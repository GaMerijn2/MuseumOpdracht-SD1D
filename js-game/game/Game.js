
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth
canvas.height = innerHeight

function start()
{  
player.draw()
animate();
}

class Player {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0
        };

        const image = new Image()
        image.src = 'img/Ship-Player.png'
        image.onload = () => {
            const scale = 1.5;//0.15
            this.image = image;
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x : canvas.width / 2 - this.width / 2,
                y : canvas.height - this.height - 40
            }
            
start()

        } 
    }
            
    draw() {
        //c.fillStyle = 'red'
        //c.fillRect(this.position.x, this.position.y,this.width, this.height)
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

class Projectile {
    constructor({ position, velocity}){
        this.position = position
        this.velocity = velocity

        this.radius = 3
    }

    draw(){ 
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, 
            Math.PI * 2)
            c.fillStyle = 'red'
            c.fill()
            c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const player = new Player()
const projectiles = []
const keys ={
    a: {
        pressed: false
    },
    d: { 
        pressed: false
    },
    ad: { 
        pressed: false
    },
    space: { 
        pressed: false
    }
    

}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    projectiles.forEach((projectile, index) => {
        if (projectile.position.y + projectile.radius <= 0) {
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0)
        } else {
            projectile.update()
        }
    })

    if (keys.ad.pressed) {
        player.velocity.x = 0
    } else if (keys.a.pressed && player.velocity.x >= 0)  {
        player.velocity.x = -5
    } else if (keys.d.pressed && player.velocity.x + player.width <= canvas.width) {
        player.velocity.x = 3
    } else{
       player.velocity.x = 0 
    }


}


addEventListener('keydown', ({ key }) => {
    switch (key){
        case 'a':
            //console.log('left-down')
            keys.a.pressed = true
            break
        case 'd':
            //console.log('right-down')
            keys.d.pressed = true
            break
        case 'a' && 'd':
            //console.log('both-down')
            keys.ad.pressed= true
            break
        case ' ':
            //console.log('space-down')
            projectiles.push(new Projectile({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y
                },
                velocity: {
                    x: 0,
                    y: -5
                }
            }))
            //console.log(projectiles)
            break
    }
})

addEventListener('keyup', ({ key }) => {
    switch (key){
        case 'a':
            //console.log('left-up')
            keys.a.pressed = false
            break
        case 'd':
            //console.log('right-up')
            keys.d.pressed = false
            break
        case 'a' && 'd':
            //console.log('both-up')
            keys.ad.pressed= false
            break    
        case ' ':
            //console.log('space-up')
            break

    }
})