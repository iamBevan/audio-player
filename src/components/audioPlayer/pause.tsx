import React from "react"
import { PauseCircleFilled } from "@material-ui/icons"

function Pause(props: any) {
	const { handleClick } = props

	return (
		<button className='player__button' onClick={() => handleClick()}>
			<PauseCircleFilled />
		</button>
	)
}

export { Pause }
