import "./App.scss"
import "./index.css"
import { AudioPlayer } from "./components/audioPlayer/audioPlayer"

function App() {
	return (
		<div className='App'>
			<AudioPlayer />
			<div className='italic'>Dog</div>
		</div>
	)
}

export default App
