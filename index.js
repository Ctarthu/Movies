
const links=[
    'https://s4108-19.imovies.cc/video/imovie_hash_code/6/2015050809430460_high_eng.mp4?md5=FDRhixkwsSQax6KVdrRfxA&expires=1624749477&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4107-23.imovies.cc/video/imovie_hash_code/9/2020030910154779_high_ENG.mp4?md5=kmDoxmZ2HGVBtL2KQW5Dgg&expires=1624749617&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4106-08.imovies.cc/video/imovie_hash_code/5/2015071422223151_high_eng.mp4?md5=2eJfx3HzvnecdH5fTcETIg&expires=1624754806&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4107-07.imovies.cc/video/imovie_hash_code/24/2020031907241776_high_ENG.mp4?md5=8oeD3tgu625DKcSGeywMyg&expires=1624749683&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4108-14.imovies.cc/video/imovie_hash_code/4/2019061019294884_high_ENG.mp4?md5=3SRk1Q4lbskvz38kETEb1A&expires=1624749718&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4112-17.imovies.cc/video/imovie_hash_code/17/2019080414211487_high_ENG.mp4?md5=snDiFQYGKa0dBl_GLXnz3Q&expires=1624749840&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4108-21.imovies.cc/video/imovie_hash_code/8/2018021511464928_high_eng.mp4?md5=ceca7FpsiwFvvr5RP-TqGg&expires=1624749983&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4108-07.imovies.cc/video/imovie_hash_code/12/2020030617103386_high_ENG.mp4?md5=4U2vEn56jMYzjTDTy2SmLg&expires=1624750023&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4114-04.imovies.cc/video/imovie_hash_code/4/20141205104584_high_eng.mp4?md5=TlLTr2SpMonkbGhvHFpsBA&expires=1624750269&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
    'https://s4108-11.imovies.cc/video/imovie_hash_code/8/2015052417333314_high_eng.mp4?md5=jXww5sE-QauzSAy1KETx2w&expires=1624750441&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjYyLjE2OC4xNzAuMjUwIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMTQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ=='

]

const names=[
    'Inglourious Basterds',
    'Joker',
    'The Shining',
    '1917',
    'Guardians Of Galaxy',
    'Star Trek',
    'Pulp Fiction',
    'ONCE UPON A TIME... IN HOLLYWOOD',
    'Borat',
    'STAR WARS: EPISODE III'



]

const texts=[
    "It is the first year of Germany's occupation of France. Allied officer Lt. Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis,including the taking of their scalps. He and his men join forces with Bridget von Hammersmark,a German actress and undercover agent, to bring down the leaders of the Third Reich. Their fates converge with theater owner Shosanna Dreyfus,who seeks to avenge the Nazis' execution of her family.",
    'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.He then embarks on a downward spiral of revolution and bloody crime.This path brings him face-to-face with his alter-ego: the Joker.',
    'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence,while his psychic son sees horrific forebodings from both past and future.',
    'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory,two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
    'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    'In the 23rd Century, Captain James T. Kirk and the crew of the U.S.S.Enterprise explore the galaxy and defend the United Federation of Planets.',
    'The lives of two mob hitmen, a boxer, a gangster and his wife,and a pair of diner bandits intertwine in four tales of violence and redemption.',
    "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    'Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world.With a documentary crew in tow, Borat becomes more interested in locating and marrying Pamela Anderson.',
    'Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat,Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.'

]

const rightarrow=document.querySelector('.right-arrow')
const leftarrow=document.querySelector('.left-arrow')
const movielist=document.querySelector('.movie-list')
const movies=document.querySelectorAll('.movie-list-item')
const image=document.querySelector('.img')
const title=document.querySelector('.title')
const description=document.querySelector('.text')
const video=document.querySelector('.video')
const vcontainer=document.querySelector('.v-container')
const right=movielist.getBoundingClientRect().right
const left=movielist.getBoundingClientRect().left
const mid=-(Math.round(movies.length/2)-2)*450 


console.log(mid);
movielist.style.transform = `translateX(${mid}px)`;

function test(){
    console.log(movielist.getBoundingClientRect().right)
    console.log(movielist.getBoundingClientRect().left);
}


rightarrow.addEventListener("click",()=>{
    if(movielist.getBoundingClientRect().right>1862){
    movielist.style.transform = 
    `translateX(${movielist.getBoundingClientRect().right - right -450}px)`;
    }
    })
    
leftarrow.addEventListener("click",()=>{
    if(movielist.getBoundingClientRect().left<62){
        movielist.style.transform = 
        `translateX(${movielist.getBoundingClientRect().left - left +450}px)`;
    }
        
    })


function open0(){
    image.setAttribute('src',0+'.jpg')
    video.setAttribute('src',links[0])
    title.innerHTML=names[0]
    description.innerHTML=texts[0]
    vcontainer.scrollIntoView()
}

    for(let i=0;i<movies.length;i++){
    movies[i].addEventListener('click',()=>{
        console.log(movies[i].id);
        let movieid=movies[i].id
        image.setAttribute('src',movieid+'.jpg')
        video.setAttribute('src',links[movieid])
        title.innerHTML=names[movieid]
        description.innerHTML=texts[movieid]
        vcontainer.scrollIntoView();



                
        })
        
    }









    