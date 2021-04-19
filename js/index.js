const main = document.querySelector('.main');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';


function page(e){
    e.preventDefault();
    let clickedLink = e.target;
    url = clickedLink.href;
    loadContent();
};

function loadContent(){
    fetch(url)
        .then(function(rsp){
        return rsp.text();
    }).then(function (data){
        main.innerHTML = data;
    });
};
for(let link of links){
    link.addEventListener("click", page);
};
loadContent();