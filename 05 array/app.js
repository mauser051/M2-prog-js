class App {
    runApplication() {
        console.log("hello world");
        const list = ["artist1", "artist2", "artist3"];
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            const element = i +": " + list[i];
            console.log(element);
        }
        const nummers = [1, 2, 3];
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const element = nummers[i] + 1;
            console.log(element);
        }
        list.push("daniel1")
        list.push("daniel2")
        for (let i = 0; i < list.length; i++) {
            const element = i +": " + list[i];
            console.log(element);
        }
        let indexToRemove = list.indexOf("daniel1")
        list.splice(indexToRemove,1)
        indexToRemove = list.indexOf("daniel2")
        list.splice(indexToRemove,1)
        list.push("daniel3")
        list.push("daniel4")
        for (let i = 0; i < list.length; i++) {
            const element = i +": " + list[i];
            console.log(element);
        }
    }
}
let app = new App();
app.runApplication();