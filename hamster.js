const { Pet } = require("./pet");

class Hamster extends Pet {
    constructor(name, content) {
        super(name, content);
        this.content = content;
    }

    playsInHamsterBall(){
        this.energy -= 5;
        this.health += 5;
        this.happiness += 10;
        this.hunger -= 5;
        this.thirst -= 5;
        this.cleanliness -= 5;
        console.log(`${this.name} had fun running around in their hamster ball`);
        return this;
    }
}

module.exports = { Hamster };