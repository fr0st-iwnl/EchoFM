let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// track_lists songs
let curr_track = document.createElement('audio');


let track_list = [
  {
    name: " through the light ",
    artist: "dracodraco",
    image: "https://lh3.googleusercontent.com/MVMKu12czfJUuAJwlPX66vCwauaxfGPvs_t6EA_8uh-dyCrb5hTkwTLnVUuMxJ_O9Rl8-x1xblVc_-J1zA",
    path: "output/songs/through the light.mp3",
  },
  {
    name: "SUMMER NIGHT",
    artist: "ESPRIT",
    image: "https://i1.sndcdn.com/artworks-000038057725-j88nws-t500x500.jpg",
    path: "output/songs/ESPRIT 空想 SUMMER NIGHT.mp3"
  },
  {
    name: "CRUISER",
    artist: "ESPRIT",
    image: "https://i1.sndcdn.com/avatars-000125808250-ip1ds1-t200x200.jpg",
    path: "output/songs/ESPRIT 空想 CRUISER.mp3"
  },
  {
    name: "Highway",
    artist: "Elusin",
    image: "https://lh3.googleusercontent.com/O6HKirsEh8ddms9y7gFmoWDJEq0H49ohr4lWXNhD1QsPIAzPmbXMEFDsLPI8bn2q3wTQQ5ekZtBGdM3a",
    path: "output/songs/Highway.mp3",
  },
  {
    name: "The Unknowing",
    artist: "Jfarrari",
    image: "https://lh3.googleusercontent.com/J-ObyJwiFlgP4euxQ9_x-P6yHpIVOuto3Rhz_hIIfSqlDywP4GqsRxRmK5PGMBCSySfHc7lZ0HESorY2",
    path: "output/songs/The Unknowing.mp3",
  },
  {
    name: "Dusk",
    artist: "Sleepy Opiate",
    image: "https://lh3.googleusercontent.com/hqWo2VW6dCrJ4iKoHJS_F0QLCy0Zt13ZfeRcgYw81OYfyflie8_5cg4pKrlsIiGLXdgdNsjMBh4bhiE",
    path: "output/songs/Dusk.mp3",
  },
  {
    name: "i like the way you kiss me",
    artist: "Artemas",
    image: "https://lh3.googleusercontent.com/0tzQNxMXkhmfBS0zaluhQv0vSYbGkXeRKplAXYRkhVZwu1B3RCvbaWcx7OAhLBTfrMmiBLomYroGJoMY",
    path: "output/songs/i like the way you kiss me.mp3",
  },
  {
    name: "Tantrum",
    artist: "Riovaz",
    image: "https://lh3.googleusercontent.com/42_fquVsHwPo6PX2jWuznGc1CPq9_O3BwJQAhwI5Jv7J93g-j9jBcojCxMZ3_kQPeHpEEtEXH17IvG8Z",
    path: "output/songs/Riovaz - Tantrum.mp3",
  },
  {
    name: "No Wind Resistanance!",
    artist: "Kinneret",
    image: "https://lh3.googleusercontent.com/xL4_njYZJcnh7_EXuZoaEnJusneTX_Y4OefpxnexA8cqzrjanl2cM0f3agoe15SQ7iL1Ly2_hnQtjfQ",
    path: "output/songs/Kinneret - No Wind Resistanance.mp3",
  },
  {
    name: "Dance Floor Dolor",
    artist: "Mareux",
    image: "https://lh3.googleusercontent.com/YqBKphySFYjUtxU3ga6Npm3TGV0ay1-t1cDaNG73z_2FpF0Z2X9flUJxD7UEcVHb7y8SRswmudleJB5u2g",
    path: "output/songs/Dance Floor Dolor.mp3",
  },
  {
    name: "Be a Body",
    artist: "Grimes",
    image: "https://lh3.googleusercontent.com/ph93RMtzqisATCOJWHtG0LviaHhgt0R3_C6MMFhaeTXSLLGEQpTpXrYD7uM7cYODP2EGFSVwBChYSwfNLQ",
    path: "output/songs/Be a Body.mp3",
  },
  {
    name: "I Wanna Be Software",
    artist: "Grimes",
    image: "https://lh3.googleusercontent.com/C903Z-OYuc1TzsyK_JNptDHgIp-97fo0A5oELr2oZv4rDxVs7GlCjFDcs0DA1ygOb8aP9DLVbeIgeLQ",
    path: "output/songs/I Wanna Be Software.mp3",
  },
  {
    name: "Avalon",
    artist: "Zeruel",
    image: "https://lh3.googleusercontent.com/sjRRYo_n2nF8kKp_uXpZvFEz0C4kIpiEVJ3guzArFAgvkRY2YFIPDwZXk8nXH29424eheY62DG7KUfk",
    path: "output/songs/Avalon.mp3",
  },
  {
    name: "Mother",
    artist: "Anzu",
    image: "https://lh3.googleusercontent.com/zLFXHnfAUcdOkx2Z7jkZ0RpJb1hNGPBbJp9j2UiaMRKl6CJjogXuMEL6aUVtY4vWQxokgQuvsZzGJiU",
    path: "output/songs/Mother.mp3",
  },
  {
    name: "vice city",
    artist: "XXXTENTACION",
    image: "https://lh3.googleusercontent.com/wwE83Ff95pvw2daayMLbhlFClUtg2pMZZQLobs5O03-bgq8PczeqOfzjXnF7wfPNkhlEgQWiSWGQzWcsxA",
    path: "output/songs/XXXTENTACION - vice city.mp3",
  },
  {
    name: "time apart",
    artist: "seahorse choke",
    image: "https://lh3.googleusercontent.com/rLHou1Bamx0oqbBcdhqrtp243G3caSbvM0UEkPL3Zair-jQbS5wNDv0w5tTqEhrYQ93OyW7P4402RtmA",
    path: "output/songs/time apart.mp3",
  },
  {
    name: "Andro",
    artist: "Oneohtrix Point Never",
    image: "https://lh3.googleusercontent.com/fLBanMadxMSm1LjKCEoOe3AcjUC_Lj4zx_3DOJZpNOeQZGTvnTHTP90jVueDLoeho78CTlwX7Ry_9wZz",
    path: "output/songs/Andro.mp3",
  },
  {
    name: "Principio De Lucha",
    artist: "Anime de Japan",
    image: "https://lh3.googleusercontent.com/9J6rWIXCv6GImlQZ1nYdnd9v-kvMVHBPN1BQjBPEiK3IlVTtFP3h1nlBdRyVIsIrRMwT_QyMPsPx150",
    path: "output/songs/Anime de Japan - Principio De Lucha.mp3",
  },
  {
    name: "Ulquiorra Theme",
    artist: "Bleach",
    image: "https://i.ytimg.com/vi/m6VoBfZTQjM/maxresdefault.jpg",
    path: "output/songs/Ulquiorra theme.mp3",
  },
  {
    name: "7 Creeping shadows",
    artist: "Bleach",
    image: "https://st.cdjapan.co.jp/pictures/l/15/00/SVWJ-70611.jpg",
    path: "output/songs/7 Creeping Shadows.mp3",
  },
];


// CHANGE BACKGROUND PE CARE L AM FACUT IN SIDE PROJECT 
const backgrounds = ['output/images/russia1.png', 'output/images/russia2.png', 'output/images/russia3.png', 'output/images/russia4.png', 'output/images/russia5.png', 'output/images/russia6.png', 'output/images/russia7.png' ];
let currentBackgroundIndex = 0;

document.getElementById('changeBackground').addEventListener('click', function() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
});






function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// loader pt tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


