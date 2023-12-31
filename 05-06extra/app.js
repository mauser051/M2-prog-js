class App {
    runAplication() {
        console.log("hello world");
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        const fixedRadius = 20;
        let items = [['boom', 'red', 1.2], ['huis', 'yellow', 0.8]];
        items.push(['car', 'blue', 1.0], ['flower', 'green', 0.5], ['mountain', 'gray', 1.5]);
        items.splice(2, 1);

        function drawTree(x, y,color, size) {
            g.fillStyle = 'green';
            g.beginPath();
            g.arc(x, y, 20 * size, 0, Math.PI * 2);
            g.fill();
            g.fillStyle = 'brown';
            g.beginPath();
            g.moveTo(x, y - 10 * size);
            g.lineTo(x - 10 * size, y + 10 * size);
            g.lineTo(x + 10 * size, y + 10 * size);
            g.fill();
        }

        function drawHouse(x, y,color, size) {
            g.fillStyle = "black";
            g.fillRect(x - 15 * size, y - 15 * size, 30 * size, 30 * size);
            g.fillStyle = 'black';
            g.fillRect(x - 10 * size, y - 15 * size, 10 * size, 30 * size);
            g.fillStyle = 'gold';
            g.beginPath();
            g.moveTo(x - 15 * size, y - 15 * size);
            g.lineTo(x, y - 30 * size);
            g.lineTo(x + 15 * size, y - 15 * size);
            g.fill();
        }

        for (let i = 0; i < 200; i++) {
            let x = Math.random() * (canvas.width - 2 * fixedRadius) + fixedRadius;
            let y = Math.random() * (canvas.height - 2 * fixedRadius) + fixedRadius;

            let item = items[i % items.length];
            let itemName = item[0];
            let itemColor = item[1];
            let itemSize = item[2];

            if (itemName === 'boom') {
                drawTree(x, y, itemColor, itemSize);
            } else if (itemName === 'huis') {
                drawHouse(x, y, itemColor, itemSize);
            }
    }
    }
}

let app = new App();
app.runAplication();