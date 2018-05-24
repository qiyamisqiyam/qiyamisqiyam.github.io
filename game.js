
///Variables
var x = 0;
var player;
var basketball;
var GROUND_HEIGHT = 400;
var score=0;
var crtScore;
var bstScore = 0;
var bg;



var gameActive = true;



//what happens on startup
function setup() {
    bg = loadImage("basketcourt.png");
    //make a screen
    createCanvas(600,400);
   
    //make a sprite
    player=createSprite(300,350,50,10);
    player.color=color(255,0,0);
    bottle= createSprite(300, 26, 7, 20);

    var basketballImage = loadImage("basketball.png");
    bottle.addImage(basketballImage);
    bottle.scale = 0.1;
}



function endGame() {
    gameActive = false;
    if (score > bstScore) {
        bstScore = score;
    }
    
}
function reset() {
    score=0;
    x=0;
    bottle.position.y=25;
    gameActive = true;
}

function mouseClicked() {
    if (x == 1) {
        reset();
    }
}

//loop
function draw() {
    
    if (gameActive) {
      
        background(bg);
        drawSprites();
        bottle.position.y= bottle.position.y +3;

    //    //gravity loop
    //    if (player.position.y<GROUND_HEIGHT-player.height/2) {
    //        player.velocity.y= player.velocity.y+1;
    //    } else {
    //        player.velocity.y = 0;
    //        player.position.y = GROUND_HEIGHT-player.height/2;
    //    }

    //    if (keyDown(LEFT)) {
    //        player.position.x=player.position.x - 5;
    //    }
    //    
    //    if (keyDown(RIGHT)) {
    //        player.position.x=player.position.x + 5;
    //    }
        if (bottle.position.x<player.position.x+21.5 && bottle.position.x>player.position.x - 21.5 && bottle.position.y > 337 && bottle.position.y <350) {
            bottle.position.y=25;
            bottle.position.x=random(26,574);
            score=score+1;
            console.log(score);
        }

    //  
        if (bottle.position.y>375) {
                endGame();
                x=1;
        }
        if (keyDown(LEFT)) {
            player.position.x=player.position.x -   5;
        }   

        if (keyDown(RIGHT)) {
            player.position.x=player.position.x +5;
        }
        if (player.position.x>575) {
            player.position.x=574;
        }

        if (player.position.x<25) {
            player.position.x = 26;
        }
    
        text("Score:"+score,7,15)
    } else {
        background(0,0,255);
        fill(0);
        textAlign(CENTER);
        text("Your score was: "+ score, width / 2, height / 2);
        text("Best Score: "+ bstScore , 300 ,220)
    }
    

}