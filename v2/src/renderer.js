import playPauseBtnClickHandler from "./components/playPauseBtnClickHandler.js";
import episode from "./components/episode.js";
import EpisodesData from "./components/EpisodesData.js";
import likeBtnClickHandler from "./components/likeBtnClickHandler.js";
// ---------------------------- //

const Main = document.querySelector("#main > div.grid");

for (const key in EpisodesData) {
  const [cover, title, date, duration, epNum, audioSource, description] = [
    EpisodesData[key]["cover"],
    EpisodesData[key]["title"],
    EpisodesData[key]["date"],
    EpisodesData[key]["duration"],
    EpisodesData[key]["epNum"],
    EpisodesData[key]["audioSource"],
    EpisodesData[key]["description"],
  ];

  Main.innerHTML += episode(
    cover,
    title,
    date,
    duration,
    epNum,
    audioSource,
    description
  );
}

// ---------------------------- //

likeBtnClickHandler();

playPauseBtnClickHandler();

// setInterval(() => {
//   console.log("is audio paused : " + document.querySelector("audio").paused);

//   console.log("readyState : " + document.querySelector("audio").readyState);
//   if (document.querySelector("audio").readyState === 4) {
//     document.querySelector("#audio-processing").classList.add("invisible");
//   } else {
//     document.querySelector("#audio-processing").classList.remove("invisible");
//   }
// }, 1000);

// document.querySelector("#pause-now").addEventListener("click", () => {
//   document.querySelector("audio").pause();
// });

// document.querySelector("#play-now").addEventListener("click", () => {
//   document.querySelector("audio").play();
// });

// document.querySelector("audio").addEventListener("playing", (event) => {
//   console.log("playing right now");
// });
