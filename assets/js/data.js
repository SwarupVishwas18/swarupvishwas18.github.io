
// Setting Age
document.querySelector('#yr-2').textContent = new Date().getFullYear() - 2003;
document.querySelector('#age').textContent = new Date().getFullYear() - 2003;

    
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
