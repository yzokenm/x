import { seconds_to_time } from "/JavaScript/modules/datetime/datetime.js";

export default class Video extends HTMLElement {
	#main_element = null;
	#video_element = null;

	#volume_up_button_element = null;
	#volume_off_button_element = null;
	#play_button_element = null;
	#pause_button_element = null;
	#fullscreen_button_element = null;
	#seek_bar_element = null;

	#current_time_element = null;
	#total_time_element = null;

	constructor() {
		super();

		if (!this.hasAttribute("source")) return;
		const path_and_file = this.getAttribute("source");

		CSS: {
			const style = document.createElement('style');
			style.textContent = `
				:host {
					display: inline-block;
					width: 100%;
					height: 100%;

					cursor: pointer;
					user-select: none;

					overflow: hidden;
				}

				main {

					& div {
						&:hover .controls {
							opacity: 1;
							pointer-events: auto;
						}

						& .controls {
							position: absolute;
							bottom: 10px;
							left: 50%;
							z-index: 3;
							transform: translateX(-50%);

							background: rgba(0, 0, 0, .6);
							backdrop-filter: blur(15px);
							-webkit-backdrop-filter: blur(15px);
							opacity: 0;

							pointer-events: none;
							transition: opacity 200ms;
						}
					}

					/* FULLSCREEN MODE */
					&.active {
						position: fixed;
						inset: 0;
						width: 100dvw;
						height: 100dvh;
						z-index: 20;
						display: grid;
						place-items: center;

						&::before {
							content: "";
							position: fixed;
							inset: 0;
							background: rgba(0, 0, 0, .5);
							backdrop-filter: blur(20px);
							-webkit-backdrop-filter: blur(20px);
							z-index: 0;
						}

						& div {
							max-width: 80dvw;
							max-height: 80dvh;
							z-index: 1;

							& video {
								max-width: 100dvw;
								max-height: 100dvh;
								object-fit: cover;
							}
						}
					}
				}
			`;

			this.appendChild(style);
		}

		this.innerHTML += `
			<main class="width-100 height-100">
				<div class="position-relative width-100 height-100">
					<video class="width-100 height-100 object-fit-cover cursor-pointer" src="${path_and_file}"></video>

					<column class="controls radius-default padding-x-2">
						<row class="flex-row flex-x-between flex-y-center gap-0-3">
							<x-svg name="volume_up" color="white" class="text-size-0-8"></x-svg>
							<x-svg name="volume_off" color="white" class="text-size-0-8 display-none"></x-svg>
							<x-svg name="play_v1" color="white" class="text-size-1-6"></x-svg>
							<x-svg name="pause_v1" color="white" class="text-size-1-6 display-none"></x-svg>
							<x-svg name="fullscreen" color="white" class="text-size-0-8"></x-svg>
						</row>

						<row class="flex-row flex-x-between flex-y-center s-flex-x-center gap-0-2 text-size-0-5">
							<span class="current_time">00:00:00</span>
							<input type="range" class="width-200px" min="0" value="0" step="0.1">
							<span class="total_time">00:00:00</span>
						</row>
					</column>

				</div>
			</main>
		`;

		this.#video_element = this.querySelector("video");
		this.#volume_up_button_element = this.querySelector("x-svg[name='volume_up']");
		this.#volume_off_button_element = this.querySelector("x-svg[name='volume_off']");
		this.#play_button_element = this.querySelector("x-svg[name='play_v1']");
		this.#pause_button_element = this.querySelector("x-svg[name='pause_v1']");
		this.#seek_bar_element = this.querySelector("input[type=range]");
		this.#fullscreen_button_element = this.querySelector("x-svg[name='fullscreen']");

		this.#current_time_element = this.querySelector("span.current_time");
		this.#total_time_element = this.querySelector("span.total_time");

		Listeners: {
			this.#main_element = this.querySelector("main");
			this.#main_element.addEventListener("click", () => {
				if(event.target === this.#main_element && this.#main_element.classList.contains("active")) this.#hide();
			});

			this.#volume_up_button_element.addEventListener("click", () => this.#toggle_volume());
			this.#volume_off_button_element.addEventListener("click", () => this.#toggle_volume());

			this.#play_button_element.addEventListener("click", () => this.#play());
			this.#pause_button_element.addEventListener("click", () => this.#pause());
			this.#fullscreen_button_element.addEventListener("click", () => this.#fullscreen());

			// Exit on Escape
			document.addEventListener('keydown', (e) => {
				if (this.#main_element.classList.contains("active") && e.key === "Escape") this.#hide();
			});
		}

		this.#init_video_object_listeners();
	}

	#init_video_object_listeners() {
		if (this.#video_element === null) return;

		// "loadedmetadata" fires when duration and basic info are available
		this.#video_element.addEventListener("loadedmetadata", () => { this.#update_total_time(); });

		// "timeupdate" fires periodically as video plays (roughly 4 times/second)
		this.#video_element.addEventListener("timeupdate", () => { this.#update_current_time();	});

		this.#seek_bar_element.addEventListener("input", () => {
			this.#video_element.currentTime = parseFloat(this.#seek_bar_element.value);
		});

		// "ended" fires when video finishes playing
		this.#video_element.addEventListener("ended", () => {
			this.#play_button_element.classList.remove("display-none");
			this.#pause_button_element.classList.add("display-none");
		});

		this.#video_element.addEventListener("error", (e) => {
			Log.error(`Video->#init_video_object_listeners(): ${this.#video_element.error}`);
			console.log(this.#video_element.error);
		});
	}


	///// Controls

	#toggle_volume(){
		this.#video_element.muted = !this.#video_element.muted;

		if (this.#video_element.muted) {
			this.#volume_up_button_element.classList.add("display-none");
			this.#volume_off_button_element.classList.remove("display-none");
		} else {
			this.#volume_off_button_element.classList.add("display-none");
			this.#volume_up_button_element.classList.remove("display-none");
		}
	}

	#play(){
		this.#video_element.play();

		this.#video_element.addEventListener('play', () => {
			this.#play_button_element.classList.add("display-none");
			this.#pause_button_element.classList.remove("display-none");
		});
	}

	#pause(){
		this.#video_element.pause();

		this.#video_element.addEventListener('pause', () => {
			this.#pause_button_element.classList.add("display-none");
			this.#play_button_element.classList.remove("display-none");
		});
	}

	#fullscreen(){
		if (!this.#main_element.classList.contains("active")) this.#show();
		else this.#hide();
	}


	///// Time

	#update_current_time() {
		this.#current_time_element.textContent = seconds_to_time(this.#video_element.currentTime);
		this.#seek_bar_element.value = this.#video_element.currentTime;
	}

	#update_total_time() {
		if (isNaN(this.#video_element.duration) == false) {
			this.#total_time_element.textContent = seconds_to_time(this.#video_element.duration);
			this.#seek_bar_element.max = this.#video_element.duration;
		}
	}



	#show(){
		this.#main_element.classList.add("active");

		// disable scrolling
		document.body.style.overflow = "hidden";
	}

	#hide(){
		this.#main_element.classList.remove("active");

		// enable scrolling
		document.body.removeAttribute("style");
	}
}

customElements.define("x-video", Video);
