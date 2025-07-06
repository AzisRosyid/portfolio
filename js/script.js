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

function setLanguage(lang) {
    // Save selected language to local storage
    localStorage.setItem('language', lang);

    // Translate all static text elements
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerText = translations[lang][key];
        }
    });

    // Re-render the projects section with the correct language
    renderProjects(lang);
}


function renderProjects(lang) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const projectData = lang === 'id' ? projectsData_id : projectsData_en;
    const viewProjectText = translations[lang].project_button;

    // Clear existing content
    projectsGrid.innerHTML = '';

    // Loop through data and generate cards
    projectData.forEach(project => {
        const projectCard = `
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
                        <img src="${project.imageUrl}" class="w-full h-48 object-cover" alt="${project.title} Image">
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-xl font-semibold mb-2 text-gray-900">${project.title}</h3>
                            <p class="text-gray-600 text-base mb-4 flex-grow">${project.description}</p>
                            <a href="${project.projectUrl}" target="_blank" class="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors mt-auto text-center inline-block">${viewProjectText}</a>
                        </div>
                    </div>
                `;
        projectsGrid.innerHTML += projectCard;
    });
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
