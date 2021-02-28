var backGround;
var car,car1,car2,car3,car4;
var title;
var input
var gameState = "start"
var play
var button1,button2,button3,button4;
var track;
var s
var obstacle,obstaclesGroup,img;
var e

function preload(){
backGround = loadImage("ground.png");
car1 = loadAnimation("car1.png");
car2 = loadAnimation("car2.png");
car3 = loadAnimation("car3.png");
car4 = loadAnimation("car4.png")
car4 = loadAnimation("car4.png")
track = loadImage("track.jpg")
img = loadImage("t.png")
s = loadImage("s.png")
e = loadImage("e.jpg")
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-30);
   

    car  = createSprite(700,650,50,50);
    car.scale = 1.5;
    car.addAnimation("c",car1);
    car.addAnimation("t",car2);
    car.addAnimation("d",car3);
    car.addAnimation("a",car4);

    input = createInput('ENTER YOUR NAME');
    input.position(600,200)

    title = createElement("h1");
        title.position(600,100);
        title.html("SPEEDY DASH");
 
        
       

        button1 = createButton("white");
        button1.position(500,400);
        button1.mousePressed(hite);

        button2 = createButton("blue");
        button2.position(600,400);
        button2.mousePressed(lue);

        button3 = createButton("black");
        button3.position(700,400);
        button3.mousePressed(lack);
        
        button4 = createButton("red");
        button4.position(800,400);
        button4.mousePressed(ed)

        play = createButton('PLAY');
       play.position(700,500)
       play.mousePressed(lay)

       obstaclesGroup = new Group();

   
}

function draw(){
    background(backGround);

    if(gameState === "start"){
        
       
       textSize(20)
       text("SELECT CAR COLUR : ",500,300);
       

    }

    if(gameState === "play"){
        input.hide();
        button1.hide();
        button2.hide();
        button3.hide();
        button4.hide();
        title.hide()
        play.hide();

        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);


        camera.position.x = displayWidth/2;
        camera.position.y = car.y;

        if(keyDown("up")){
            car.y = car.y - 10
        }

        if(keyDown("right")){
            car.x = car.x+10
        }

        if(keyDown("left")){
            car.x = car.x-10
        }

        if(obstaclesGroup.isTouching(car)){
            gameState = "end"
        }

        spawnObstacles();

        if(car.y <= -3250){
            gameState = "win"
        }


    }


    if(gameState == "end"){

        background(s)
        var data = input.value();

        textSize(80)
        fill("red")
        text( data,450,car.y + 200);
        obstaclesGroup.destroyEach();
       car.visible = false
        
    }

    if(gameState == "win"){
        var name = input.value()
        background(e);
        obstaclesGroup.destroyEach();
       textSize(100)
       fill("white")
        text(name,400,car.y+200)
        car.visible = false;
    }
   
    drawSprites();
}

function hite (){
    car.changeAnimation("c",car1);
}

function lue(){
    car.changeAnimation("d",car3)
}

function lack(){
    car.changeAnimation("a",car4)
}

function ed(){
    car.changeAnimation("t",car2)
}

function lay(){
    gameState = "play";
}

function spawnObstacles(){
    if (frameCount % 100 === 0){
         obstacle = createSprite(car.x, car.y-200,10,40);
         obstacle.velocitY = 6
         obstacle.addImage(img)
      
        
             
        obstacle.scale = 0.1 ;
        obstacle.lifetime = 300;
        obstaclesGroup.add(obstacle)
      
    }
   }