const image=document.querySelector('img');
const music=document.querySelector('audio');
const play=document.getElementById('play');
const Artist=document.getElementById('an');
const songname=document.getElementById('sn');
const next=document.getElementById('forward');
const back=document.getElementById('backward');
const songs=[
    {
        artist:'RFAK',
        Song:'Koi chand rakh',
        songfile:'KCR',
        
    },
    {
        artist:'Arjit Singh',
        Song:'Chana Merya',
        songfile:'CMA',
    },
    {
        artist:'Lata Mangeshkar ',
        Song:'Do pal ruka',
        songfile:'DPR',
    },
    {
        artist:'Shani Arshad',
        Song:'Fitoor',
        songfile:'FO',
    },
   
]
let isplaying=false;
const playmusic=()=>{
    isplaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('animation');
}
const pausemusic=()=>{
    isplaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    image.classList.remove('animation');
}
play.addEventListener('click',()=>{
    if(isplaying){
        pausemusic();
    }
    else{
        playmusic();
    }
})
const loadsongs=(songs)=>{
    Artist.textContent=songs.artist;
    songname.textContent=songs.Song;
    music.src=songs.songfile + ".mp3";
    image.src=songs.songfile + ".jpg";
}
let i=0;
const nextsong=()=>{
    i=(i+1)%songs.length;
    loadsongs(songs[i]);
    playmusic();

}
const prevsong=()=>{
    i=((i-1)+songs.length)%songs.length;
    loadsongs(songs[i]);
    playmusic();

}

next.addEventListener('click', nextsong);
back.addEventListener('click', prevsong);



