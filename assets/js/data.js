// Setting Age
// document.querySelector('#yr-2').textContent = new Date().getFullYear() - 2003;
document.querySelector('#age').textContent = new Date().getFullYear() - 2003 + ' years';
var tg  = document.querySelector("#telegram");
var insta  = document.querySelector("#instagram");
var twit  = document.querySelector("#twitter");
var git  = document.querySelector("#github");
var ln  = document.querySelector("#linkedin");

var tgTop = document.querySelector('#tg-top');
var inTop = document.querySelector('#in-top');
var twTop = document.querySelector('#tw-top');
var gitTop = document.querySelector('#git-top');
var liTop = document.querySelector('#li-top');


var follower = document.querySelector('#followers');
var following = document.querySelector('#following');
var repos = document.querySelector('#repos');

fetch('https://api.github.com/users/SwarupVishwas18')
    .then(response => response.json())
    .then(data => {
        follower.textContent = data['followers'];
        following.textContent = data['following'];
        repos.textContent = data['public_repos'];
        document.querySelector('#loader').style.display = "none";
    })

tg.addEventListener('click', function(){
    tgTop.style.display = 'flex';
    inTop.style.display = 'none';
    twTop.style.display = 'none';
    gitTop.style.display = 'none';
    liTop.style.display = 'none';
    window.scrollBy(0,500);

})

insta.addEventListener('click', function(){
    inTop.style.display = 'flex';
    tgTop.style.display = 'none';
    twTop.style.display = 'none';
    gitTop.style.display = 'none';
    liTop.style.display = 'none';
    window.scrollBy(0,500);
})

twit.addEventListener('click', function(){
    twTop.style.display = 'flex';
    inTop.style.display = 'none';
    tgTop.style.display = 'none';
    gitTop.style.display = 'none';
    liTop.style.display = 'none';
    window.scrollBy(0,500);

})

git.addEventListener('click', function(){
    gitTop.style.display = 'flex';
    inTop.style.display = 'none';
    twTop.style.display = 'none';
    tgTop.style.display = 'none';
    liTop.style.display = 'none';
    window.scrollBy(0,500);

})

ln.addEventListener('click', function(){
    liTop.style.display = 'flex';
    inTop.style.display = 'none';
    twTop.style.display = 'none';
    gitTop.style.display = 'none';
    tgTop.style.display = 'none';
    window.scrollBy(0,500);

})

var closeBtns = document.querySelectorAll('.close-top');

closeBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        liTop.style.display = 'none';
        inTop.style.display = 'none';
        twTop.style.display = 'none';
        gitTop.style.display = 'none';
        tgTop.style.display = 'none';
    })
});
