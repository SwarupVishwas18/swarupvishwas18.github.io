// Taking DOM

var name2 = document.querySelector('#project-name');
var title = document.querySelector('#project-title');
var desc = document.querySelector('#project-desc');
var updated = document.querySelector('#project-updated');
var link = document.querySelector('#git-link');
var tags = document.querySelector('#all-tags');
var readme = document.querySelector('#readme-data');
const queryString = window.location.search;
let paramString = queryString.split('?')[1];
let params_arr = paramString.split('&');
var val = '';
for (let i = 0; i < params_arr.length; i++) {
   let pair = params_arr[i].split('=');
   console.log("Key is:", pair[0]);
   console.log("Value is:", pair[1]);
   val = pair[1];
}

fetch(`https://api.github.com/repos/SwarupVishwas18/${val}`)
    .then(response => response.json())
    .then(data => {
            name2.textContent = data['name'];
            title.textContent = data['name'];
            desc.textContent = data['description'];
            updated.textContent = data['updated_at'].split('T')[0];
            link.href = data['html_url'];
    })

fetch(`https://api.github.com/repos/SwarupVishwas18/${val}/languages`)
    .then(response => response.json())
    .then(data => {
        var keys = Object.keys(data);
        keys.forEach(key => {
            var sp = document.createElement('span');
            sp.classList.add('grey');
            sp.textContent = key;
        tags.appendChild(sp)

        });

        
    })


fetch(`https://raw.githubusercontent.com/SwarupVishwas18/${val}/master/README.md`)
    .then(response => response.text())
    .then(data => {
			readme.innerHTML = marked(data, { sanitize: true });
            var images = readme.querySelectorAll('img');

            console.log(images);

            images.forEach(img => {
                img.addEventListener('click', function(){
                    window.open(img.src, '_blank');
                })
            });
    })
