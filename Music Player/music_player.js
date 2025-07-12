const songsData = [
  { id: 1, title: "Dreams", artist: "Fleetwood Mac", category: "Rock", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", category: "Pop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 3, title: "Clair de Lune", artist: "Debussy", category: "Classical", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 4, title: "Lose Yourself", artist: "Eminem", category: "Hip-Hop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 5, title: "Levitating", artist: "Dua Lipa", category: "Dance", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 6, title: "Canon in D", artist: "Pachelbel", category: "Instrumental", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 7, title: "Shape of You", artist: "Ed Sheeran", category: "Pop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 8, title: "Bohemian Rhapsody", artist: "Queen", category: "Rock", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  // Bollywood songs
  { id: 9, title: "Tum Hi Ho", artist: "Arijit Singh", category: "Bollywood", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 10, title: "Kal Ho Naa Ho", artist: "Sonu Nigam", category: "Bollywood", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 11, title: "Tujh Mein Rab Dikhta Hai", artist: "Roop Kumar Rathod", category: "Bollywood", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 12, title: "Channa Mereya", artist: "Arijit Singh", category: "Bollywood", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio(songsData[currentSongIndex].url);

const searchInput = document.getElementById("search");
const playlistContainer = document.getElementById("playlist");
const nowPlaying = document.getElementById("now-playing");
const playPauseBtn = document.getElementById("play-pause");
const skipBtn = document.getElementById("skip");
const volumeSlider = document.getElementById("volume");

function renderPlaylist(songs) {
  playlistContainer.innerHTML = "";
  songs.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = "song" + (index === currentSongIndex ? " active" : "");
    div.textContent = `${song.title} - ${song.artist} (${song.category})`;
    div.onclick = () => {
      currentSongIndex = songsData.findIndex(s => s.id === song.id);
      loadSong();
    };
    playlistContainer.appendChild(div);
  });
}

function loadSong() {
  audio.src = songsData[currentSongIndex].url;
  nowPlaying.textContent = `Now Playing: ${songsData[currentSongIndex].title} by ${songsData[currentSongIndex].artist}`;
  renderPlaylist(filterSongs(searchInput.value));
  if (isPlaying) audio.play();
}

function filterSongs(query) {
  return songsData.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase()) ||
    song.category.toLowerCase().includes(query.toLowerCase())
  );
}

searchInput.addEventListener("input", e => {
  const filtered = filterSongs(e.target.value);
  renderPlaylist(filtered);
});

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
});

skipBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songsData.length;
  loadSong();
});

volumeSlider.addEventListener("input", e => {
  audio.volume = e.target.value;
});

loadSong();
playPauseBtn.textContent = "▶️";
