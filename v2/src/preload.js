// const Main = document.querySelector("#main > div.grid");

// function ep(cover, title, date, epNum, audioSource) {
//   return `
//     <div class="group relative rounded-sm overflow-hidden">
//       <span class="absolute z-10 top-1 left-0 text-[#f00] px-2 rounded-e-lg text-xs bg-black ">
//         EP ${epNum}
//       </span>
//       <span class="absolute top-1 left-10 text-[#f00] px-2 rounded-e-lg text-xs bg-black -translate-x-full group-hover:translate-x-0 transition-transform delay-75 duration-1000 whitespace-nowrap">
//         ${title}
//       </span>
//       <span class="hidden">${date}</span>
//       <span class="hidden">${audioSource}</span>
//       <img src=${cover} class="object-cover w-full h-full" />
//     </div>
//   `;
// }

// for (const key in EpisodesData) {
//   const [cover, title, date, epNum, audioSource] = [
//     EpisodesData[key]["cover"],
//     EpisodesData[key]["title"],
//     EpisodesData[key]["date"],
//     EpisodesData[key]["epNum"],
//     EpisodesData[key]["audioSource"],
//   ];

//   Main.innerHTML += ep(cover, title, date, epNum, audioSource);
// }
