var post = document.querySelectorAll('.post');
var back = document.querySelector('.popupnews');
var head = back.querySelector('section').querySelector('h2');
var para = back.querySelector('section').querySelector('p');
back.onclick = function () {
    back.style.display = 'none';
    head.innerHTML = '';
    para.innerHTML = '';
};

function showNews(num) {
    back.style.display = 'flex';
    head.innerHTML = post[num].querySelector('h2').innerHTML;
    para.innerHTML = post[num].querySelector('h2').innerHTML + ':' + post[num].querySelector('.popuptext')
        .innerHTML;
}