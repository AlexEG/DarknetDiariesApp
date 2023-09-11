function DownloadBtnClickHandler() {
  const DownloadBtns = document.querySelectorAll(".download-btn > svg");

  if (!localStorage.getItem("downloadedEpisodes")) {
    localStorage.setItem("downloadedEpisodes", JSON.stringify([]));
  }
  const DownloadedEpisodes = JSON.parse(
    localStorage.getItem("downloadedEpisodes")
  );

  DownloadBtns.forEach((btn) => {
    if (
      DownloadedEpisodes.includes(
        +btn.parentElement.parentElement.parentElement.getAttribute(
          "data-epNum"
        )
      )
    ) {
      btn.setAttribute("fill", "red");
      btn.parentElement.classList.replace("opacity-0", "opacity-80");
    }

    btn.addEventListener("click", () => {
      if (btn.getAttribute("fill") === "none") {
        console.log(
          btn.parentElement.parentElement.parentElement.getAttribute(
            "data-epNum"
          )
        );

        const updateDownloadedEpisodes = JSON.parse(
          localStorage.getItem("downloadedEpisodes")
        );

        updateDownloadedEpisodes.push(
          +btn.parentElement.parentElement.parentElement.getAttribute(
            "data-epNum"
          )
        );

        localStorage.setItem(
          "downloadedEpisodes",
          JSON.stringify(updateDownloadedEpisodes)
        );

        btn.setAttribute("fill", "red");
        btn.parentElement.parentElement.classList.replace(
          "opacity-0",
          "opacity-80"
        );
      } else {
        const DownloadedEpisodes = JSON.parse(
          localStorage.getItem("downloadedEpisodes")
        );

        const updateDownloadedEpisodes = DownloadedEpisodes.filter(
          (ep: number) =>
            ep !==
            +btn.parentElement.parentElement.parentElement.getAttribute(
              "data-epNum"
            )
        );
        localStorage.setItem(
          "downloadedEpisodes",
          JSON.stringify(updateDownloadedEpisodes)
        );

        btn.setAttribute("fill", "none");
      }
    });
  });
}

export default DownloadBtnClickHandler;
