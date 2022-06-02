class Pet {
    constructor(name){
        this.name = name;
        this.health = 50;
        this.energy = 50;
        this.happiness = 50;
        this.hunger = 50;
        this.thirst = 50;
        this.cleanliness = 50;
    }

    sleep(){
        this.energy += 10;
        this.hunger -= 5;
        this.thirst -= 5;
        console.log(`${this.name} is feeling refreshed`);
        return this;
    }

    eats(){
        this.hunger += 10;
        this.health += 5;
        this.cleanliness -= 5;
        this.energy += 5;
        console.log(`${this.name} enjoyed their food and is feeling less hungry`);
        return this;
    }

    drinks(){
        this.thirst += 10;
        this.health += 5;
        console.log(`${this.name} is feeling hydrated`);
        return this;
    }

    bath(){
        this.cleanliness += 10;
        this.happiness -= 5;
        this.health += 5;
        console.log(`${this.name} enjoyed their bath and is lovely and clean`);
        return this;
    }

    stats(){
        return console.table({
            name: this.name,
            health: this.health,
            energy: this.energy,
            happiness: this.happiness,
            hunger: this.hunger,
            thirst: this.thirst,
            cleanliness: this.cleanliness,
        });
    }
}

module.exports = { Pet };