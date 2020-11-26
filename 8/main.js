var firstInputBox = document.elem.firstInput;
var secondInputBox = document.elem.secondInput;
var addBox = document.act.addElem;
var printBox = document.act.saveElem;

var i = 0;

function onchange(e) {
    printElem.textContent = null;
    if (i <= 1) {
        printElem.textContent += "{\u0022" + document.elem.firstInput.value + "\u0022";
        printElem.textContent += ":\u0022" + document.elem.secondInput.value + "\u0022";
    } else {
        printElem.textContent = "{";
        j = 0;
        while (j < +i) {
            printElem.textContent += "\u0022" + document.elem.firstInput[j].value + "\u0022";
            printElem.textContent += ":\u0022" + document.elem.secondInput[j].value + "\u0022";
            j++;
            if (j != i) {
                printElem.textContent += ",";
            }
        }
        printElem.textContent += "}";
    }
}

function goup(o) {
    var a1, a2, b1, b2, now, next;

    now = o.parentNode.parentNode;
    next = now.previousSibling;
    if (next != null) {
        a1 = now.children[0].children[0].value;
        a2 = now.children[0].children[1].value;
        b1 = next.children[0].children[0].value;
        b2 = next.children[0].children[1].value;
        now.children[0].children[0].value = b1;
        now.children[0].children[1].value = b2;
        next.children[0].children[0].value = a1;
        next.children[0].children[1].value = a2;
    }
}

function godown(o) {
    var a1, a2, b1, b2, now, next;

    now = o.parentNode.parentNode;
    next = now.nextSibling;
    if (next != null) {
        a1 = now.children[0].children[0].value;
        a2 = now.children[0].children[1].value;
        b1 = next.children[0].children[0].value;
        b2 = next.children[0].children[1].value;
        now.children[0].children[0].value = b1;
        now.children[0].children[1].value = b2;
        next.children[0].children[0].value = a1;
        next.children[0].children[1].value = a2;
    }
}

function godelete(o) {
    i--;
    o.parentNode.remove();
}

function add() {
    i = i + 1;
    var nodet = document.createElement('tr');
    var node = document.createElement('td');
    node.innerHTML = "<input type='text' name='firstInput' value=''>";
    node.innerHTML += "<input type='text' name='secondInput' value=''>";
    node.innerHTML += "<input type='button' name='up' value='↑' onClick=goup(this)>";
    node.innerHTML += "<input type='button' name='down' value='↓' onClick=godown(this)>";
    node.innerHTML += "<input type='button' name='del' value='X' onClick=godelete(this) >";
    document.elem.appendChild(nodet);
    nodet.appendChild(node);
}
window.onload = add;
printBox.onclick = onchange;
addBox.onclick = add;