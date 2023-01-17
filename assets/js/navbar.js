// Take all elements

let searchIcon = document.querySelector('#searchIcon');
let searchSec = document.querySelector('#search-section');
let closeBtn = document.querySelector('#close-btn');
let mobS = document.querySelector('#mobSearchIcon');
let lines = document.querySelector('#lines');
let mobNav = document.querySelector('#mob-nav');


lines.addEventListener('click', function(e){
    e.preventDefault();
    console.log(mobNav.style.display);
    if(mobNav.style.display == '' || mobNav.style.display == 'none'){
    mobNav.style.display = 'block';
    }else{
        mobNav.style.display = 'none';
    }
});

// Mouse Pointer

// import React from "react";
// import "./cursor.css";

// function cursor() {

    function lerp (start, end, amt){
        return (1-amt)*start+amt*end
      }
      
      const small = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0,
      }
      
      const big = {...small}
      
      const animate = () => {
        const element = document.querySelector('.icon')
        const element_small = document.querySelector('.icon-holder')
        let x = lerp(big.x1, big.x2, 0.1);
        let y = lerp(big.y1, big.y2, 0.1);
        if(x+40>=window.innerWidth)
           x=window.innerWidth-40
        if(y+40>=window.innerHeight)
           y=window.innerHeight-40
        element.style.transform = 'translate('+x+'px,'+y+'px)'
        big.x1 = x
        big.y1 = y
        
        let x_small = lerp(small.x1, small.x2, 0.3);
        let y_small = lerp(small.y1, small.y2, 0.3);
        element_small.style.transform = 'translate('+x_small+'px,'+y_small+'px)'
        small.x1 = x_small
        small.y1 = y_small
        
      }
      setInterval(()=>{
        animate()
      }, 60)
      document.addEventListener('mousemove', (e)=>{
        big.x2 = e.clientX+20
        big.y2 = e.clientY+20
        small.x2 = e.clientX
        small.y2 = e.clientY
      })
      document.addEventListener('mousedown', (e)=>{
        document.querySelector('.icon').classList.add('depressed')
      })
      document.addEventListener('mouseup', (e)=>{
        document.querySelector('.icon').classList.remove('depressed')
      })

 
    
    document.querySelector("#cursor").innerHTML = ' <div class="icon"></div><div class="icon-holder"></div>'
 
//   );
// }

// export default cursor;


// Setting Footer Year
document.querySelector('#currentYr').textContent = new Date().getFullYear();
