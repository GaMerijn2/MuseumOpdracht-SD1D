import { Rect } from "./rect.js";

export class GameRenderer
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];

        this.playerIdle = new Rect(0,0,17,17);
        this.enemyIdle = new Rect(0,0,17,12);
    }


    
    loadImages()
    {
        let sourches = ["Shippy.png", "Enemy-small.png"];
        let scope = this;

        let loaded = 0;
        for (let i = 0; i < sourches.length; i++)
        {
            let img = new Image();

            img.onload = function () 
            {
                loaded++;
                if (loaded == sourches.length)
                {
                    scope.game.startGame();
                }
            };
            img.src = sourches[i];

            this.images.push(img);
        }
    }

    renderSprite(img, clip, pos)
    {
        this.g.drawImage(img, 
            clip.x, clip.y, clip.w, clip.h,
            pos.x, pos.y, pos.w, pos.h);
    }

    render()
    {
        let g = this.g;

        g.fillStyle = "#000000";
        g.fillRect(0,0, canvas.clientWidth, canvas.clientHeight);
        
        g.fillStyle = "#ffffff";
        let enemy = this.game.enemy;
        let player = this.game.player;
        let clip = this.playerIdle;
       // let clip = this.enemyIdle;
// fix dit, vraag aan docent. kan met rendersprite niet 2 sprites doen omdat ik de let clip = this.enemyIdle nie kan doen, dan is er al de let clip this.playerIdle en kan de andere niet. vraag hoe dit opgelost kan worden
        //this.renderSprite(this.images[1], this.enemyidle, this.game.enemy);
        this.renderSprite(this.images[0], this.playerIdle, this.game.player);
    }

}