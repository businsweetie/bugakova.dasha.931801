document.querySelector('.curtain').addEventListener('click', e => {
    let curtain = e.target
    curtain.classList.remove("hover");
    curtain.classList.add("curtain_click")
    curtain.style.top = "-100%";
})

document.querySelector('.lamp').addEventListener('mousedown', e => {
    let turn = document.querySelector('.turn')
    turn.style.top = "65px";
})

document.querySelector('.lamp').addEventListener('mouseup', e => {
    let turn = document.querySelector('.turn')
    turn.style.top = "50px";
})

let switchOn = false;

document.querySelector('.lamp').addEventListener('click', e => {
    let light = document.querySelector('.light_triangle');
    if (switchOn) {
        light.classList.add('hide')
        document.querySelector('.witch_focus').classList.add('hide')
    } else {
        light.classList.remove('hide');
        document.querySelector('.witch_focus').classList.remove('hide')
    }
    switchOn = !switchOn;
})

let change = ["rat", 0, "bird"];
let i = 1;
document.querySelector('.hat').addEventListener('click', e => {
    let firstAnimal = document.querySelector('.' + change[(-i + 1)]);
    i = -i;
    firstAnimal.style.top = "420px";
    setTimeout(() => {
        firstAnimal.classList.add('hide')
        let seconAnimal = document.querySelector('.' + change[(-i + 1)]);
        seconAnimal.classList.remove('hide')
        seconAnimal.style.top = "350px";
    },500)
})