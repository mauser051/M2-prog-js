import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"
import { MakeDino, MakePlant } from "./fabriek.mjs";

class App
{
    runAplication()
    {
        console.log("hello world");
        let dino = new Dino("modulosaurus");
        console.log(dino.naam);
        let plant = new Plant("test1");
        console.log(plant.naam);
        let makedino = MakeDino();
        console.log(makedino)
        let makeplant = MakePlant();
        console.log(makeplant)
    }
}

let app = new App();
app.runAplication();