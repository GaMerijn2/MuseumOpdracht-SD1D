

export class GameLogic
{
    constructor(game)
    {
        this.game = game;
        //array voor bullets
    }
    mouseMoved(event)
    {
        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;
    }

    //mouselick make rect add to bullets
    
    logic()
    {
        //beweeg bullets
    }
}