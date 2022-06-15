import { Dispatch, SetStateAction } from "react"
import { PauseCircleFilled, PlayCircleFilled } from "@material-ui/icons"

interface PlayPauseProps {
	playing: boolean
	handleClick: Dispatch<SetStateAction<boolean>>
}

function PlayPause({ playing, handleClick }: PlayPauseProps) {
	return (
		<button
			className='player__button'
			onClick={() => handleClick(!playing)}
		>
			{playing ? <PauseCircleFilled /> : <PlayCircleFilled />}
		</button>
	)
}

export { PlayPause }
