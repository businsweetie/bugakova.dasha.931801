const typesOfFigures = {
    "Квадрат": 'square',
    "Треугольник": 'triangle',
    "Круг": 'circle'
}

const figureBtns = document.querySelectorAll('.btn');
let selectedFigure = null;
const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addFigure = (type, quantity) => {
    let body = document.querySelector('body');
    let figureSize = getNumber(50, 200);

    for (let i = 0; i < quantity; i++) {
        let figure = document.createElement('div');
        figure.classList.add(type);

        figure.style.width = figureSize + 'px';
        figure.style.height = figureSize + 'px';

        figure.style.top = getNumber(100,400) + 'px';
        figure.style.left = getNumber(100,1100) + 'px';

        figure.addEventListener('click', e => {
            if (selectedFigure) selectedFigure.target.style.background = '';

            selectedFigure = {
                target: e.target,
                type
            }

            if (type === 'triangle') e.target.style.background = "linear-gradient(to right bottom, transparent 50%, yellow 50%) left / 50% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, yellow 50%) right / 50% 100% no-repeat";
            else e.target.style.background = "#F0FF96"
        })

        figure.addEventListener('dblclick', e => e.target.remove())
        body.append(figure);
    }
}

for (let btn of figureBtns) {
    btn.addEventListener('click', (e) => {
        let type = typesOfFigures[e.target.outerText];
        let quantity = document.querySelector('input').value;
        addFigure(type, quantity);
    })
}