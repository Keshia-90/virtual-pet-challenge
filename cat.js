const { Pet } = require("./pet")

class Cat extends Pet {
    constructor(name, content){
        super(name, content);
        this.content = content;
    }

    nap() {
        this.energy += 5;
        this.hunger -= 5;
        console.log(`${this.name} enjoyed their nap and is feeling ${this.content}`);
        return this;
    }

    plays(){
        this.energy -= 10;
        this.happiness += 10;
        this.hunger -= 5;
        this.thirst -= 5;
        this.cleanliness -= 5;
        console.log(`${this.name} enjoyed playing with their toys and is feeling${this.content}`);
        return this;
    }
}

module.exports = { Cat };