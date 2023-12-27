function gobalfunction() {
    console.log("ik ben gobal")
    console.log("dus je mag mij overal aanroepen")
}


let hetresultaat = heefteenResultaat();
console.log(hetresultaat);
console.log(heefteenResultaat());

class App {
    runAplication() {
        console.log("hello world");
    }
    newClassFunction() {
        console.log("newclassfunction")
    }
    anotherFunctionWithArguments(aArgument) {
        console.log("kom hier met je argument")
        console.log("hier")
        console.log(aArgument)
    }
    mario() {
        console.log("MARIO!!")
    }
    som(x, y) {
        let nummers = x + y;
        return nummers;
    }
    lach() {
        return "BWAHAHA!!!";
    }
}

let app = new App();
app.newClassFunction();

app.anotherFunctionWithArguments("mijn argument is iets...");
app.mario()
console.log(app.som(1, 2))
console.log(app.lach())

function aanroepVoorbeeld() {

}

function argumentsArehandy(shoutout) {
    console.log("do you want an shoutout?")
    console.log(shoutout)
}

argumentsArehandy("super shoutout");

argumentsArehandy("super shoutout");

argumentsArehandy("supershoutout, hou het ")

aanroepVoorbeeld();

function heefteenResultaat() {
    let resultaat = 1;
    return resultaat;
}

heefteenResultaat();

app.runAplication();


let x = 9;
let a = 3;
let b = 4;
let c = 89;

let y = (a * (x * x)) + (b * x) + 3;
console.log(y)

function ax2bcWiskunde(x, a, b, c) {

    let y = (a * (x * x)) + (b * x) + c;
    return y;
}

let y1 = ax2bcWiskunde(9, 3, 4, 89)
console.log(y1)
let y2 = ax2bcWiskunde(3, 6, 5, 45)
console.log(y2)
let y3 = ax2bcWiskunde(7, 1, 2, 13)
console.log(y3)