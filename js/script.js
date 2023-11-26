// Function to smoothly scroll to the target section
function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}

// Function to toggle the visibility of the navbar links on small screens
function toggleNav() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.style.display = (navbarLinks.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var heightScale = 0.866;

    function rnd(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    function updateCanvasSize() {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    }

    function render() {
        updateCanvasSize();

        ctx.fillStyle = 'rgb(246,249,252)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 0;

        var triSide = 40;
        var halfSide = triSide / 2;
        var rowHeight = Math.floor(triSide * heightScale);
        var columns = Math.ceil(canvas.width / triSide) + 1;
        var rows = Math.ceil(canvas.height / rowHeight);

        var col, row;
        for (row = 0; row < rows; row++) {
            var hue = row * 3;

            for (col = 0; col < columns; col++) {
                var x = col * triSide;
                var y = row * rowHeight;
                var clr;

                if (row % 2 != 0) {
                    x -= halfSide;
                }

                // upward pointing triangle
                clr = 'hsl(' + hue + ', 0%, ' + rnd(90, 240) + '%)';
                ctx.fillStyle = clr;
                ctx.strokeStyle = clr;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + halfSide, y + rowHeight);
                ctx.lineTo(x - halfSide, y + rowHeight);
                ctx.closePath();
                ctx.fill();

                // downward pointing triangle
                clr = 'hsl(' + hue + ', 0%, ' + rnd(90, 245) + '%)';
                ctx.fillStyle = clr;
                ctx.strokeStyle = clr;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + triSide, y);
                ctx.lineTo(x + halfSide, y + rowHeight);
                ctx.closePath();
                ctx.fill();
            }
        }
    }

    document.body.appendChild(canvas);

    render();

    document.body.addEventListener('dblclick', render);
    window.addEventListener('resize', render);
});
