import { GameRenderer } from "./gamerenderer.js";
import { GameLogic } from "./gamelogic.js";

class Game
{
    constructor()
    {
        this.renderer = new GameRenderer(this);
        this.renderer = new GameLogic(this);
    }
}

let game = new Game()  
//game.render();