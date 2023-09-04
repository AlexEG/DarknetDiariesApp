export default function episode(
  cover,
  title,
  date,
  duration,
  epNum,
  audioSource,
  description
) {
  return `
    <div 
      class="group relative rounded-sm overflow-hidden hover:drop-shadow-[0_0_10px_#ff000055] transition delay-75 duration-500 brightness-50 hover:brightness-75 "
      data-title='${title}'
      data-date='${date}'
      data-audioSource='${audioSource}'
      data-duration='${duration}'
      data-epNum='${epNum}'
      data-description='${description}'
    >
      <span class="absolute z-10 top-1 left-0 text-[#f00] px-2 rounded-e-lg text-xs bg-black">
        EP ${epNum}
      </span>
      <span class="absolute top-1 left-10 text-[#f00] px-2 rounded-e-lg text-xs bg-black -translate-x-full group-hover:translate-x-0 transition-transform delay-75 duration-1000 whitespace-nowrap">
        ${title}
      </span>
      
      <img src=${cover} class="object-cover w-full h-full" />

      <button class="play-Pause-btn opacity-0 group-hover:opacity-100 absolute bottom-1.5 right-1.5 transition rounded-full hover:shadow-playPauseBtn ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.2"
        stroke="#f00"
        class="w-9 h-9 bg-black/25 rounded-full hover:bg-black/50 transition-colors"
        data-playing="false"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>
    </button>
    <button
            class="like-btn absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.0"
              stroke="#f00"
              class="w-6 h-6 rounded-full  transition delay-75 duration-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

    </div>
  `;
}
