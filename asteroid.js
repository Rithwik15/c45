class Asteroid{
    constructor(x,y){
        if(frameCount%50===0){
        this.asteroid = createSprite(x,y,20,20)
this.x = x
this.y = y 
this.image = loadImage("a.png");
        }
    }
    display(){
    this.asteroid.addImage("asteroid",this.image);
    this.asteroid.scale = 0.4
    this.asteroid.velocityY = 2
drawSprites()
    }
}