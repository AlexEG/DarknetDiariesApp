import "./index.css";

import playPauseBtnClickHandler from "./components/playPauseBtnClickHandler";
import episode from "./components/episode";
import EpisodesData from "./components/EpisodesData";
import likeBtnClickHandler from "./components/likeBtnClickHandler";
import DownloadBtn from "./components/DownloadBtnClickHandler";
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

DownloadBtn();
