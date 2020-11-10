import React from "react"
import { PlayCircleFilled } from "@material-ui/icons"

function Play(props: any) {
	const { handleClick } = props

	return (
		<button className='player__button' onClick={() => handleClick()}>
			<PlayCircleFilled />
		</button>
	)
}

export { Play }
