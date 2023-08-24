const EpisodesData = {
  ep53: {
    cover: "./assets/Darknet-Diaries/ep53.jpg",
    title: "SHADOW BROKERS",
    date: "2019-12-10",
    epNum: 53,
    audioSource:
      "https://dcs.megaphone.fm/ADV9906244248.mp3?key=ffd686a3fbac097d557630fc768d9ecb&request_event_id=2ec37ca4-8981-4d15-a12b-93c6c3edb956",
  },
  ep54: {
    cover: "./assets/Darknet-Diaries/ep54.jpg",
    title: "NOTPETYA",
    date: "2019-12-24",
    epNum: 54,
    audioSource:
      "https://dcs.megaphone.fm/ADV7741006833.mp3?key=93e5b97ee08a967f068459577d75a582&request_event_id=ae0aeca7-405c-4c93-8b7a-aa1e06b7c878",
  },
};

const Main = document.querySelector("#main > div.grid");

function ep(cover, title, date, epNum, audioSource) {
  return `
    <div class="group relative rounded-sm overflow-hidden">
      <span class="absolute z-10 top-1 left-0 text-[#f00] px-2 rounded-e-lg text-xs bg-black ">
        EP ${epNum}
      </span>
      <span class="absolute top-1 left-10 text-[#f00] px-2 rounded-e-lg text-xs bg-black -translate-x-full group-hover:translate-x-0 transition-transform delay-75 duration-1000 whitespace-nowrap">
        ${title}
      </span>
      <span class="hidden">${date}</span>
      <span class="hidden">${audioSource}</span>
      <img src=${cover} class="object-cover w-full h-full" />
    </div>
  `;
}

for (const key in EpisodesData) {
  const [cover, title, date, epNum, audioSource] = [
    EpisodesData[key]["cover"],
    EpisodesData[key]["title"],
    EpisodesData[key]["date"],
    EpisodesData[key]["epNum"],
    EpisodesData[key]["audioSource"],
  ];

  Main.innerHTML += ep(cover, title, date, epNum, audioSource);
}
