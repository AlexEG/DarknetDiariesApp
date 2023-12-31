export default function likeBtnClickHandler() {
  const likedEps = document.querySelectorAll(".like-btn > svg");

  if (!localStorage.getItem("likedEpisodes")) {
    localStorage.setItem("likedEpisodes", JSON.stringify([]));
  }
  const LikedEpisodes = JSON.parse(localStorage.getItem("likedEpisodes"));

  likedEps.forEach((btn) => {
    if (
      LikedEpisodes.includes(
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

        const updateLikedEpisodes = JSON.parse(
          localStorage.getItem("likedEpisodes")
        );

        updateLikedEpisodes.push(
          +btn.parentElement.parentElement.parentElement.getAttribute(
            "data-epNum"
          )
        );

        localStorage.setItem(
          "likedEpisodes",
          JSON.stringify(updateLikedEpisodes)
        );

        btn.setAttribute("fill", "red");
        btn.parentElement.parentElement.classList.replace(
          "opacity-0",
          "opacity-80"
        );
      } else {
        const LikedEpisodes = JSON.parse(localStorage.getItem("likedEpisodes"));

        const updateLikedEpisodes = LikedEpisodes.filter(
          (ep: number) =>
            ep !==
            +btn.parentElement.parentElement.parentElement.getAttribute(
              "data-epNum"
            )
        );
        localStorage.setItem(
          "likedEpisodes",
          JSON.stringify(updateLikedEpisodes)
        );

        btn.setAttribute("fill", "none");
      }
    });
  });
}
