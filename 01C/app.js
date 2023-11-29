class App
{
    runAplication()
    {
        console.log("hello world");
        this.greeting = "Starting up";

this. appName = "demoapp"
this. versie = 0.1
this. versiedatum = "14:45 21/11/2023 (central eupean time)"
this. autheur = "leraar"
this. copyright = "leraar BV"
this. distributeur = "leraar soft"
this. darkmode = false

   let eerst = true
    let tweede = "try"
    let derde = 1

    this. eerst = true
    this. tweede = "try"
    this. derde = 1
    }
}

let app = new App();
app.runAplication();

console.log(app.greeting)
console.log("appname: " + app.appName);
console.log("versie: " + app.versie);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright)
console.log("distributeur" + app.distributeur)
console.log("darkmode: " + app.darkmode)