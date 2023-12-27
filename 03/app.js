class App
{
    runApplication()
    {
        let title = document.getElementById("newstitle");
        console.log(title);
        let newitem1 = document.getElementsByClassName("gamenews")[1];
        console.log(newitem1)
        let newitem2 = document.getElementsByClassName("gamenews headline")[0];
        console.log(newitem2)
        //dit is om de code van html in css te veranderen
        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#70416A";
            newitem1.style.backgroundColor = "#70C2F4";
            newitem2.style.backgroundColor = "#632FFF";
        }else if(random > 0.2&& random < 0.6){
            title.style.backgroundColor = "#000000";
            newitem1.style.backgroundColor = "#B81515";
            newitem2.style.backgroundColor = "#EBC2C2";
        }else if(random > 0.6&& random < 0.75){
            title.style.backgroundColor = "#1E16D7";
            newitem1.style.backgroundColor = "#750202";
            newitem2.style.backgroundColor = "#7020C7";
        }else if(random > 0.75){
            title.style.backgroundColor = "#FDAFAF";
            newitem1.style.backgroundColor = "#E513DF"
            newitem2.style.backgroundColor = "#30206D"
        }
        //random getal bepaal de 
    }
}

let app = new App();
app.runApplication();