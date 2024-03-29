function Bar(props: any) {
	const { duration, curTime, onTimeUpdate } = props

	const curPercentage = (curTime / duration) * 100

	function calcClickedTime(e: any) {
		const clickPositionInPage = e.pageX
		const bar = document.querySelector(".bar__progress")

		let barStart
		let barWidth
		if (bar) {
			barStart = bar.getBoundingClientRect().left + window.scrollX
			barWidth = (bar as HTMLElement).offsetWidth
		}

		let clickPositionInBar
		if (barStart) clickPositionInBar = clickPositionInPage - barStart

		let timePerPixel
		if (barWidth) timePerPixel = duration / barWidth

		let result
		if (timePerPixel && clickPositionInBar)
			result = timePerPixel * clickPositionInBar

		return result
	}

	function handleTimeDrag(e: any) {
		onTimeUpdate(calcClickedTime(e))

		const updateTimeOnMove = (eMove: any) => {
			onTimeUpdate(calcClickedTime(eMove))
		}

		document.addEventListener("mousemove", updateTimeOnMove)

		document.addEventListener("mouseup", () => {
			document.removeEventListener("mousemove", updateTimeOnMove)
		})
	}

	return (
		<div className='bar'>
			<span className='bar__time'>
				{curTime &&
					new Date(curTime * 1000).toISOString().substring(11, 19)}
			</span>
			<div
				className='bar__progress'
				style={{
					background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`,
				}}
				onMouseDown={e => handleTimeDrag(e)}
			>
				<span
					className='bar__progress__knob'
					style={{ left: `${curPercentage - 2}%` }}
				/>
			</div>
			<span className='bar__time'>
				{duration &&
					new Date(duration * 1000).toISOString().substring(11, 19)}
			</span>
		</div>
	)
}

export { Bar }
