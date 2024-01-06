
export class Dino {
    constructor(naam, vleeseter, leeftijd, leeft, hunger) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = leeft;
        this.hunger = hunger;
    }

    eatFood(foodToEat) {
        foodToEat.naam = this.naam;
        console.log("ik ben een " + this.naam);
        console.log("mijn honger: " + this.hunger);
        return foodToEat;
    }
}
