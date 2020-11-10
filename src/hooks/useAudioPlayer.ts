import { useState, useEffect } from "react"

function useAudioPlayer() {
	const [duration, setDuration] = useState<number | undefined>()
	const [curTime, setCurTime] = useState<number>(0)
	const [playing, setPlaying] = useState(false)
	const [clickedTime, setClickedTime] = useState<number | null>()
	const [volume, setVolume] = useState(1)

	useEffect(() => {
		const audio = document.getElementById("audio") as HTMLAudioElement

		console.log(audio.duration)
		// state setters wrappers
		const setAudioData = () => {
			if (audio) {
				setDuration(audio.duration)
				setCurTime(audio.currentTime)
			}
		}

		const setAudioTime = () => {
			setCurTime(audio.currentTime)
			console.log("audio.volume", audio.volume)
		}

		// DOM listeners: update React state on DOM events
		audio.addEventListener("loadeddata", setAudioData)

		audio.addEventListener("timeupdate", setAudioTime)

		// React state listeners: update DOM on React state changes
		playing ? audio.play() : audio.pause()

		if (clickedTime && clickedTime !== curTime) {
			audio.currentTime = clickedTime
			setClickedTime(null)
		}

		// effect cleanup
		return () => {
			audio.removeEventListener("loadeddata", setAudioData)
			audio.removeEventListener("timeupdate", setAudioTime)
		}
	}, [clickedTime, playing, curTime])

	useEffect(() => {
		const audio = document.getElementById("audio") as HTMLAudioElement
		audio.volume = volume
	}, [volume])

	return {
		clickedTime,
		curTime,
		duration,
		playing,
		setPlaying,
		setClickedTime,
		setVolume,
	}
}

export default useAudioPlayer
