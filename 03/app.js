class App
{
    runAplication()
    {
        console.log("hello world");
        //this is to print the code in screen as words instead of value
        let title = document.getElementById("newstitle");
        console.log("title");
         
        let random = Math.random();
        console.log(random)
        if (random > 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        }
        g.beginpath()
        g.moveTo(20, 20);
        g.lineTo(300, 300);
        g.closePath();
        g.stroke();
    }
}

let app = new App();
app.runAplication();