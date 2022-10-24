var arena = document.querySelector('#project-arena');
var colors = new Array("chartreuse", 'pink', 'burlywood', 'gold', 'cyan');
fetch("https://api.github.com/users/SwarupVishwas18/repos")
    .then(response => response.json())
    .then(datas => {
        datas.forEach(data => {
            var projectCont = document.createElement('div');
            projectCont.classList.add('project-container');
            var name = data['name'];
            var description = data['description'];
            var created = data['updated_at'].split("T")[0];
            var url = `./viewProject.html?name=${name}`;
            projectCont.innerHTML = `
            <div class="project" id="project">
            <h3>
                ${name}
            </h3>
            <p>
                ${description}
            </p>
        </div>
        <div class="extra-data">
            <div class="download">
             Last Updated : ${created}
            </div>
            <div class="more-link">
                <a href="${url}">View Details</a>
            </div>
        </div>
            `;

            // projectCont.style.backgroundColor = colors[parseInt(Math.random()*colors.length)];
            // console.log(colors[parseInt(Math.random()*2]));
            console.log(colors[0]);
            // console.log(Math.random() * 2);
            
            arena.appendChild(projectCont);
        });
       
    })