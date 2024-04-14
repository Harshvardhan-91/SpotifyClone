document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuside.classList.remove("active");
  })
);
const hamburger = document.querySelector(".hamburger");
const menuside = document.querySelector(".menu_side");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuside.classList.toggle("active");
});

const music = new Audio("audio/1.mp3");
//music.play();

const songs = [
  {
    id: 1,
    songName: `On My Way <br />
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `Pehle Bhi main <br />
        <div class="subtitle">Vishal Mishra , Rajshekhar</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/album1.jpg",
  },
  {
    id: 8,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 9,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/mix1.jpg",
  },
  {
    id: 10,
    songName: `On Top <br />
        <div class="subtitle">Karan Aujla & Ikky</div>`,
    poster: "img/recom2.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.add("bi-pause-circle-fill");
    masterPlay.classList.remove("bi-play-circle-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.remove("bi-pause-circle-fill");
    masterPlay.classList.add("bi-play-circle-fill");
  }
});
