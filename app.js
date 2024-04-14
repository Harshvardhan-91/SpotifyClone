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
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playlistPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105, 105, 105, .0)";
  });
};

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

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1} : ${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2} : ${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
