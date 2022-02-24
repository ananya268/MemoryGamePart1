var Shoe1, Shoe2, Shoe3, Shoe4, Shoe5
var Shoe_1, Shoe_2, Shoe_3, Shoe_4, Shoe_5
var Card

function preload(){
	Shoe1=loadImage("Shoe1.png"); 
	Shoe2=loadImage("Shoe2.png"); 
	Shoe3=loadImage("Shoe3.png"); 
	Shoe4=loadImage("Shoe4.png"); 
	Shoe5=loadImage("Shoe5.png"); 
	Card=loadImage("Card.png"); 
} 

function setup(){
	createCanvas(1800, 800); 

	Shoe_1 = createSprite(100, 100, 50, 50);
	Shoe_1.addImage(Shoe1);
	Shoe_1.scale = 0.2;

	Shoe_2 = createSprite(200, 100, 50, 50)
	Shoe_2.addImage(Shoe2)
	Shoe_2.scale = 0.3

	Shoe_3 = createSprite(300, 100, 50, 50)
	Shoe_3.addImage(Shoe3)
	Shoe_3.scale = 0.2

	Shoe_4 = createSprite(400, 100, 50, 50)
	Shoe_4.addImage(Shoe4)
	Shoe_4.scale = 0.45
	
	Shoe_5 = createSprite(500, 100, 50, 50)
	Shoe_5.addImage(Shoe5)
	Shoe_5.scale = 0.25

	for(var i=200; i<600; i=i+20){
		Card_=createSprite(400, 200, 50, 50); 
		Card.scale = 1.2
	}
}

function draw(){
	background("pink");
	drawSprites(); 
}