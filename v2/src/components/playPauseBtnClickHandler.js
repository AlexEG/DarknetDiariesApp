export default function playPauseBtnClickHandler() {
  // --- Btn UI --- //
  const playPauseBtn = document.querySelectorAll(".play-Pause-btn > svg");

  const [play, pause] = [
    `<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />`,
    `<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
  ];

  const [
    headerEpCover,
    headerEpTitle,
    headerEpDate,
    headerEpAudioSource,
    headerEpdescription,
  ] = [
    document.querySelector("#header-ep-cover"),
    document.querySelector("#header-ep-title"),
    document.querySelector("#header-ep-data"),
    document.querySelector("#header-ep-audio-source"),
    document.querySelector("#header-ep-description"),
  ];

  // Header audio Processing feedback
  function audioProcessing() {
    setInterval(() => {
      if (document.querySelector("audio").readyState === 4) {
        document.querySelector("#audio-processing").classList.add("invisible");
      } else {
        document
          .querySelector("#audio-processing")
          .classList.remove("invisible");
      }
    }, 1000);
  }

  playPauseBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Reset all button
      playPauseBtn.forEach((btn) => {
        btn.setAttribute("data-playing", "false");
        btn.innerHTML = play;

        btn.parentElement.parentElement.classList.replace(
          "brightness-100",
          "brightness-50"
        );
        btn.parentElement.parentElement.classList.replace(
          "hover:brightness-105",
          "hover:brightness-75"
        );
        btn.parentElement.parentElement.classList.replace(
          "drop-shadow-[0_0_10px_#ff000088]",
          "hover:drop-shadow-[0_0_10px_#ff000055]"
        );
      });
      // console.log(btn.getAttribute("data-playing"));

      if (btn.getAttribute("data-playing") === "false") {
        btn.setAttribute("data-playing", "true");

        audioProcessing();
        btn.parentElement.parentElement.classList.replace(
          "brightness-50",
          "brightness-100"
        );
        btn.parentElement.parentElement.classList.replace(
          "hover:brightness-75",
          "hover:brightness-105"
        );
        btn.parentElement.parentElement.classList.replace(
          "hover:drop-shadow-[0_0_10px_#ff000055]",
          "drop-shadow-[0_0_10px_#ff000088]"
        );
      } else {
        btn.setAttribute("data-playing", "false");
      }
      // --- Btn Functionality --- //
      const [title, date, duration, epNum, audioSource, description] = [
        btn.parentElement.parentElement.getAttribute("data-title"),
        btn.parentElement.parentElement.getAttribute("data-date"),
        btn.parentElement.parentElement.getAttribute("data-duration"),
        btn.parentElement.parentElement.getAttribute("data-epNum"),
        btn.parentElement.parentElement.getAttribute("data-audioSource"),
        btn.parentElement.parentElement.getAttribute("data-description"),
      ];

      headerEpCover.setAttribute(
        "src",
        `assets/Darknet-Diaries/ep${epNum}.jpg`
      );
      headerEpTitle.textContent = `EP ${epNum} : ${title}`;
      headerEpDate.textContent = date;
      headerEpdescription.textContent = description;

      headerEpAudioSource.innerHTML = `
      <audio controls autoplay class="h-10 w-full"><source src=${audioSource} type="audio/mpeg" /></audio>`;
    });
  });
}
