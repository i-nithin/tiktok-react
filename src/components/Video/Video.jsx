import React, {useState , useRef } from 'react'
import Footer from '../Footer-left/FooterLeft'
import FooterRight from '../Footer-right/FooterRight'
import './video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)



    const play = () => {
        videoRef.current.play()
        setPlaying(true)
    }

    const pause = () => {
        videoRef.current.pause()
        setPlaying(false)
    }

 

	const onVideoPress = () => {
		if (playing) {
		   pause()
	}   else {
		 play()
	}
	}

  

	return (
		<div className="video">
			<video
				className="player"
				onClick={onVideoPress}
				muted
				ref={videoRef}
				loop
				src={url}
			></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
