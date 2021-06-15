class Food {
    constructor() {
        this.foodstock = 0
        this.lastfed
        this.image=loadImage('images/Milk.png')
    }

    //read the food from the database
    getfood() {
       
    return this.foodstock    

    }

    //write the food into the database

    updatefood(foodstock){
        

    }
    
    deductfood(){
this.foodstock=this.foodstock-1

    }



    display() {
        text(this.foodstock, 100, 100)

    }

}

