// Taking DOM

var name2 = document.querySelector("#project-name");
var title = document.querySelector("#project-title");
var desc = document.querySelector("#project-desc");
var updated = document.querySelector("#project-updated");
var link = document.querySelector("#git-link");
var tags = document.querySelector("#all-tags");
var readme = document.querySelector("#readme-data");
const queryString = window.location.search;
let paramString = queryString.split("?")[1];
let params_arr = paramString.split("&");
let bann = document.querySelector("#background-bann");
var val = "";
for (let i = 0; i < params_arr.length; i++) {
  let pair = params_arr[i].split("=");
  console.log("Key is:", pair[0]);
  console.log("Value is:", pair[1]);
  val = pair[1];
}

fetch(`https://api.github.com/repos/SwarupVishwas18/${val}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(document.title);
    document.title = data["name"];
    name2.textContent = data["name"];
    title.textContent = data["name"];
    desc.textContent = data["description"];
    updated.textContent = data["updated_at"].split("T")[0];
    link.href = data["html_url"];
    if (data["homepage"] != null) {
      document.getElementById("demo-link").href = data["homepage"];
    } else {
      document.getElementById("demo-link-cont").style.display = "none";
    }
  });

fetch(`https://api.github.com/repos/SwarupVishwas18/${val}/languages`)
  .then((response) => response.json())
  .then((data) => {
    var keys = Object.keys(data);
    keys.forEach((key) => {
      var sp = document.createElement("span");
      sp.classList.add("grey");
      sp.textContent = key;
      tags.appendChild(sp);
      document.querySelector("#loader").style.display = "none";
    });
  });

fetch(
  `https://raw.githubusercontent.com/SwarupVishwas18/${val}/master/README.md`
)
  .then((response) => response.text())
  .then((data) => {
    readme.innerHTML = marked(data, { sanitize: true });
    var images = readme.querySelectorAll("img");

    console.log(images);

    images.forEach((img) => {
      img.addEventListener("click", function () {
        window.open(img.src, "_blank");
      });
    });

    var as = readme.querySelectorAll("a");

    as.forEach((a) => {
      a.setAttribute("target", "_blank");
    });

    document.querySelector("#sub-loader").style.display = "none";
  });

// var pic_url = `https://raw.githubusercontent.com/SwarupVishwas18/${val}/main/zkar-bg.jpg`
var pic_url = `https://raw.githubusercontent.com/SwarupVishwas18/${val}/master/zkar-bg.jpg`;
fetch(pic_url).then((response) => {
  console.log(response.status);
  if (response.status == 404) {
    bann.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("./laptop.jpg")`;
  } else if (response.status == 200) {
    bann.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("${pic_url}")`;
  }
});

document.querySelector("#share-link").addEventListener("click", function () {
  const shareData = {
    title: name2.textContent,
    text: `This is ${name2.textContent} project created by Swarup Vishwas, visit using`,
    url: window.location,
  };

  try {
    navigator.share(shareData);
    alert("Link Has Been Shared..!!");
  } catch (err) {
    alert(`Cannot execute the given request in your current browser. Sorry :(`);
  }
});

document.querySelector("#pdf-link").addEventListener("click", function () {
  window.print();
});

function imageExists(image_url) {
  var http = new XMLHttpRequest();

  http.open("HEAD", image_url, false);
  http.send();

  return http.status != 404;
}
