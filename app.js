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
    songName: `Lemonade <br />
    <div class="subtitle" style="text-overflow:ellipsis;">Diljit Dosanjh</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `Pehle Bhi main <br />
    <div class="subtitle" style="text-overflow:ellipsis;">
      Vishal Mishra , Rajshekhar
    </div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `Bachke Bachke(feat. Yarah) <br />
        <div class="subtitle" style="text-overflow:ellipsis;">Karan Aujla & Ikky</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Downers At Dusk <br />
    <div class="subtitle" style="text-overflow:ellipsis;">Talha Anjum and Umair</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Ek Haseena Thi<br />
    <div class="subtitle" style="text-overflow:ellipsis;">Himesh and Shreya Ghoshal</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `Gaddi Neevi <br />
    <div class="subtitle" style="text-overflow:ellipsis;">Yo Yo Homey Singh & Singsta</div>`,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Ganga Kinare<br />
        <div class="subtitle" style="text-overflow:ellipsis;">Hansraj Raghuwanshi</div>`,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `Sinner<br />
        <div class="subtitle" style="text-overflow:ellipsis;">King </div>`,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `Teri Yaadon Main <br />
        <div class="subtitle" style="text-overflow:ellipsis;">KK, Shreya Ghosal and Sajid-Wajid</div>`,
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: `On Top <br />
        <div class="subtitle" style="text-overflow:ellipsis;">Karan Aujla</div>`,
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

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.add("bi-pause-circle-fill");
    masterPlay.classList.remove("bi-play-circle-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });
  });
});
