import { useRef } from "react"

import { Song } from "./song"
import { Bar } from "./bar"

import useAudioPlayer from "../../hooks/useAudioPlayer"
import { PlayPause } from "./play-pause"

function AudioPlayer() {
	const {
		curTime,
		duration,
		playing,
		setVolume,
		setPlaying,
		setClickedTime,
	} = useAudioPlayer()
	const audioRef = useRef<HTMLAudioElement>(null)

	const audioUrl =
		"http://www.hyperion-records.co.uk/audiotest/18%20MacCunn%20The%20Lay%20of%20the%20Last%20Minstrel%20-%20Part%202%20Final%20chorus%20O%20Caledonia!%20stern%20and%20wild.MP3"

	return (
		<div className='player'>
			<audio id='audio' ref={audioRef}>
				<source src={audioUrl} />
				Your browser does not support the <code>audio</code> element.
			</audio>
			<Song
				songName='Instant Crush'
				songArtist='Daft Punk ft. Julian Casablancas'
			/>
			<div className='controls'>
				<PlayPause playing={playing} handleClick={setPlaying} />
				<Bar
					curTime={curTime}
					duration={duration}
					onTimeUpdate={(time: number) => {
						setClickedTime(time)
					}}
				/>
				<button onClick={() => setVolume(1)}>+</button>
				<button onClick={() => setVolume(0.2)}>-</button>
			</div>
		</div>
	)
}

export { AudioPlayer }
