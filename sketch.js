//Create variables here

var database;
var food;
var foodstock;
var dogimg;
var happydogimg;
var dog;

function preload() {
  //load images here
  dogimg = loadImage("images/dogimg.png")
  happydogimg = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250, 250, 20, 20)
  dog.addImage("dog", dogimg)
  dog.scale = 0.2
  food = new Food()
  food.getfood()
  food.display()

  foodstock = database.ref('food');
  foodstock.on("value", function (data) {
    foodS = data.val()
    console.log(foodS)
  }
}

function draw() {
  background(46, 139, 87)
  drawSprites();
  //add styles here

}

function addfood(){
  foodS++
  database.ref('/').update({
    food:foodS
})

}

