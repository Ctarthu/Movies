


const rightarrow=document.querySelector('.right-arrow')
const leftarrow=document.querySelector('.left-arrow')
const movielist=document.querySelector('.movie-list')
const movies=document.querySelectorAll('.movie-list-item')
const right=movielist.getBoundingClientRect().right
const left=movielist.getBoundingClientRect().left
const mid=-(Math.round(movies.length/2)-2)*450  
console.log(mid);
movielist.style.transform = `translateX(${mid}px)`;

function test(){
    console.log(movielist.getBoundingClientRect().right)
    console.log(movielist.getBoundingClientRect().left);
}

test()


rightarrow.addEventListener("click",()=>{
    if(movielist.getBoundingClientRect().right>1858){
    movielist.style.transform = 
    `translateX(${movielist.getBoundingClientRect().right - right -450}px)`;
    test()
    }
    })
    
leftarrow.addEventListener("click",()=>{
    if(movielist.getBoundingClientRect().left<58){
        movielist.style.transform = 
        `translateX(${movielist.getBoundingClientRect().left - left +450}px)`;
        test()
    }
        
    })


function openFeatured(){
    window.open("starwars.html", "_blank");
}


