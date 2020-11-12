document.querySelectorAll('.button')[0].oncliсk = function() {left()};
document.querySelectorAll('.button')[1].oncliсk = function() {center()};
document.querySelectorAll('.button')[2].oncliсk = function() {right()};


function left(){
    document.getElementById('rightimg').querySelector('img').style.display = 'none';
    document.getElementById('leftimg').querySelector('img').style.display = '';
    document.getElementById('rightimg').style.width = '100px';
    document.getElementById('leftimg').style.width = '800px';
}

function center(){
    document.getElementById('rightimg').querySelector('img').style.display = '';
    document.getElementById('leftimg').querySelector('img').style.display = '';
    document.getElementById('rightimg').style.width = '450px';
    document.getElementById('leftimg').style.width = '450px';
}

function right(){
    document.getElementById('leftimg').querySelector('img').style.display = 'none';
    document.getElementById('rightimg').querySelector('img').style.display = '';
    document.getElementById('leftimg').style.width = '100px';
    document.getElementById('rightimg').style.width = '800px';
}