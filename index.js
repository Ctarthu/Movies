


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
    if(movielist.getBoundingClientRect().right>1862){
    movielist.style.transform = 
    `translateX(${movielist.getBoundingClientRect().right - right -450}px)`;
    test()
    }
    })
    
leftarrow.addEventListener("click",()=>{
    if(movielist.getBoundingClientRect().left<62){
        movielist.style.transform = 
        `translateX(${movielist.getBoundingClientRect().left - left +450}px)`;
        test()
    }
        
    })


function open0(){
    window.open("0.html", "_blank");
}


for(let i=0;i<movies.length;i++){
movies[i].addEventListener('click',()=>{
    console.log(movies[i].id);
    let file=movies[i].id+'.html'
    window.open(file, "_blank");

    
    })
}
       


function aaa(){
    
    }


    