var arena = document.querySelector('#project-arena');
fetch("https://api.github.com/users/SwarupVishwas18/repos?sort=created&direction=desc")
    .then(response => response.json())
    .then(datas => {
        datas.forEach(data => {
            var projectCont = document.createElement('div');
            projectCont.classList.add('project-container');
            projectCont.setAttribute('data-aos', 'fade-up');
            var name = data['name'];
            var description = data['description'];
            var created = data['created_at'].split("T")[0];
            var url = `./viewProject.html?name=${name}`;
            projectCont.innerHTML = `
            <div class="project"   id="project">
            <h3>
                ${name}
            </h3>
            <p>
                ${description}
            </p>
        </div>
        <div class="extra-data">
            <div class="download">
             Project Created : ${created}
            </div>
            <div class="more-link">
                <a href="${url}">View Details</a>
            </div>
        </div>
            `;

            // projectCont.style.backgroundColor = colors[parseInt(Math.random()*colors.length)];
            // console.log(colors[parseInt(Math.random()*2]));
            // console.log(Math.random() * 2);
            
            arena.appendChild(projectCont);
            document.querySelector('#loader').style.display = 'none';
        });
       
    })



    document.querySelector('#my-form').addEventListener('submit', function(e){
        e.preventDefault()
        var key = document.querySelector('#key').value;

        if(key == '' ||  key == null){
            location.reload();
        }
        var tada = 0;
        fetch("https://api.github.com/users/SwarupVishwas18/repos?sort=created&direction=desc")
    .then(response => response.json())
    .then(datas => {
        arena.innerHTML = '';

        datas.forEach(data => {
            var pattern = new RegExp(key, 'i');
            console.log(data['description'].search(key));
            if((data['name'].search(pattern) != -1) || (data['description'].search(pattern) != -1)){
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

                console.log("Hello");
    
                // console.log(Math.random() * 2);

                
                arena.appendChild(projectCont);
                tada++;

            }
            else{
                console.log(key);
            }

            document.querySelector('#abt-me').textContent = `${tada} Results Found For ${key}`
        });
       
    })
    });