const Main = document.querySelector("#main > div.grid");

function ep(cover, title, date, duration, epNum, audioSource, description) {
  return `
    <div class="group relative rounded-sm overflow-hidden hover:drop-shadow-[0_1px_10px_#ff000055] transition delay-75 duration-500 brightness-50 hover:brightness-75">
      <span class="absolute z-10 top-1 left-0 text-[#f00] px-2 rounded-e-lg text-xs bg-black">
        EP ${epNum}
      </span>
      <span class="absolute top-1 left-10 text-[#f00] px-2 rounded-e-lg text-xs bg-black -translate-x-full group-hover:translate-x-0 transition-transform delay-75 duration-1000 whitespace-nowrap">
        ${title}
      </span>
      <span class="hidden">${date}</span>
      <span class="hidden">${audioSource}</span>
      <span class="hidden">${duration}</span>
      <span class="hidden">${description}</span>
      <img src=${cover} class="object-cover w-full h-full" />
    </div>
  `;
}

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

  Main.innerHTML += ep(
    cover,
    title,
    date,
    duration,
    epNum,
    audioSource,
    description
  );
}

/*

function getData() {
  const [title, date, description] = [
    document.querySelector("body > div.page  h1").textContent,
    document.querySelector(
      "body > div.page > div > section.hero.hero--single > div.wrap > p"
    ).textContent,
    document.querySelector(
      "body > div.page > div > section.single > div > article > p:nth-child(5)"
    ).textContent,
  ];

  return {ep: {
    cover: `./assets/Darknet-Diaries/ep${title.slice(
      3,
      title.indexOf(":")
    )}.jpg`,
    title: title.slice(title.indexOf(":") + 2),
    date: date.slice(0, date.indexOf("|")),
    duration: date.slice(date.indexOf("|") + 2),
    epNum: +title.slice(3, title.indexOf(":")),
    audioSource: "",
    description: description,
  }};
}
getData();


*/

/*
{
    "ep": {
        "cover": "./assets/Darknet-Diaries/ep50.jpg",
        "title": "Operation Glowing Symphony",
        "date": "29 October 2019 ",
        "duration": "71:10",
        "epNum": 50,
        "audioSource": "",
        "description": "Operation Inherent Resolve was started in 2016 which aimed to combat ISIS. It was a combined joint task force lead by the US military. Operation Inherent Resolve sent troops, ships, and air strikes to Iraq and Syria to fire weapons upon ISIS military. It’s widely known that US military engaged with ISIS in this way. But what you may not have heard, is the story of how the US military also combated ISIS over the Internet. This is the story of how the US hacked ISIS and conducted Operation Glowing Symphony."
    }
}
*/
