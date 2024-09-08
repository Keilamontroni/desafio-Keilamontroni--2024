
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 50);


let x = 50;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, 50, 100, 50);
    x += 1;
    requestAnimationFrame(animate);
}

animate();