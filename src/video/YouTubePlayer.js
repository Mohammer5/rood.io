/**
 * Original source:
 * https://github.com/tjallingt/react-youtube/commit/36dc03ba0ddd0d1f36802c4674a77d76b6c6cdee
 */

import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import youTubePlayer from 'youtube-player'
import { updateCurrentTime } from './actions'
import {
  getVideoMuted,
  getVideoPlaying,
  getVideoSeeking,
  getVideoSeekTo,
} from './selectors'

const PLAYER_STATES = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
}

const createPlayer = ({
  container,
  videoId,
  onReady,
  onError,
  onStateChange,
}) => {
  const player = youTubePlayer(container, {
    videoId: videoId,
    playerVars: {
      controls: '0',
      modestbranding: '1',
      playsinline: '1',
      showinfo: '0',
    },
  })

  player.on('ready', onReady)
  player.on('error', onError)
  player.on('stateChange', onStateChange)

  return player
}

const useTogglePlay = (player, isPlaying, seeking) => {
  useEffect(() => {
    if (player && !seeking) {
      if (player.getPlayerState() !== PLAYER_STATES.PAUSED && !isPlaying) {
        player.pauseVideo()
      }

      if (player.getPlayerState() === PLAYER_STATES.PAUSED && isPlaying) {
        player.playVideo()
      }
    }
  }, [player, isPlaying, seeking])
}

const useToggleMute = (player, isMuted) => {
  useEffect(() => {
    if (player) {
      if (player.getVolume() === 0 && !isMuted) {
        player.setVolume(100)
      }

      if (player.getVolume() !== 0 && isMuted) {
        player.setVolume(0)
      }
    }
  }, [player, isMuted])
}

const useHandleSeeking = (player, isPlaying, seeking) => {
  useEffect(() => {
    if (player) {
      const paused = player.getPlayerState() === PLAYER_STATES.PAUSED

      if (paused && isPlaying && !seeking) {
        player.playVideo()
      }

      if (!paused && isPlaying && seeking) {
        player.pauseVideo()
      }
    }
  }, [player, isPlaying, seeking])
}

const useUpdateTime = (player, seekTo) => {
  useEffect(() => {
    if (player && seekTo !== -1) player.seekTo(seekTo)
  }, [player, seekTo])
}

export const YouTubePlayer = ({ videoId }) => {
  const container = useRef()
  const player = useRef()
  const dispatch = useDispatch()
  const isPlaying = useSelector(getVideoPlaying)
  const isMuted = useSelector(getVideoMuted)
  const seeking = useSelector(getVideoSeeking)
  const seekTo = useSelector(getVideoSeekTo)

  useEffect(
    () => {
      const interval = setInterval(() => {
        if (!player) return
        if (!isPlaying) return

        const currentTime = player.current.getCurrentTime()
        dispatch(updateCurrentTime(currentTime))
      }, 40)

      return () => clearInterval(interval)
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  useEffect(
    () => {
      if (container.current) {
        player.current = createPlayer({
          videoId,
          container: container.current,
          onReady: data => console.log('ready', data),
          onError: err => console.log('error', err),
          onStateChange: state => console.log('state change', state),
        })

        return () => player.current.destroy()
      }
    },
    [container] // eslint-disable-line react-hooks/exhaustive-deps
  )

  useTogglePlay(player.current, isPlaying, seeking)
  useToggleMute(player.current, isMuted)
  useHandleSeeking(player.current, isPlaying, seeking)
  useUpdateTime(player.current, seekTo)

  return (
    <div>
      <div ref={container} />
    </div>
  )
}

YouTubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
}

// export class _YouTubePlayer extends React.Component {
//   /**
//    * Expose PlayerState constants for convenience. These constants can also be
//    * accessed through the global YT object after the YouTube IFrame API is instantiated.
//    * https://developers.google.com/youtube/iframe_api_reference#onStateChange
//    */
//   static PlayerState = {
//     UNSTARTED: -1,
//     ENDED: 0,
//     PLAYING: 1,
//     PAUSED: 2,
//     BUFFERING: 3,
//     CUED: 5,
//   }
// 
//   constructor(props) {
//     super(props)
// 
//     this.container = null
//     this.internalPlayer = null
//   }
// 
//   componentDidMount() {
//     this.createPlayer()
//   }
// 
//   componentDidUpdate(prevProps) {
//     if (shouldUpdatePlayer(prevProps, this.props)) {
//       this.updatePlayer()
//     }
// 
//     if (shouldResetPlayer(prevProps, this.props)) {
//       this.resetPlayer()
//     }
// 
//     if (shouldUpdateVideo(prevProps, this.props)) {
//       this.updateVideo()
//     }
//   }
// 
//   componentWillUnmount() {
//     /**
//      * Note: The `youtube-player` package that is used promisifies all YouTube
//      * Player API calls, which introduces a delay of a tick before it actually
//      * gets destroyed. Since React attempts to remove the element instantly
//      * this method isn't quick enough to reset the container element.
//      */
//     this.internalPlayer.destroy()
//   }
// 
//   /**
//    * https://developers.google.com/youtube/iframe_api_reference#onReady
//    *
//    * @param {Object} event
//    *   @param {Object} target - player object
//    */
//   onPlayerReady = (event) => this.props.onReady(event)
// 
//   /**
//    * https://developers.google.com/youtube/iframe_api_reference#onError
//    *
//    * @param {Object} event
//    *   @param {Integer} data  - error type
//    *   @param {Object} target - player object
//    */
//   onPlayerError = (event) => this.props.onError(event)
// 
//   /**
//    * https://developers.google.com/youtube/iframe_api_reference#onStateChange
//    *
//    * @param {Object} event
//    *   @param {Integer} data  - status change type
//    *   @param {Object} target - actual YT player
//    */
//   onPlayerStateChange = (event) => {
//     this.props.onStateChange(event)
//     switch (event.data) {
//       case YouTube.PlayerState.ENDED:
//         this.props.onEnd(event)
//         break
// 
//       case YouTube.PlayerState.PLAYING:
//         this.props.onPlay(event)
//         break
// 
//       case YouTube.PlayerState.PAUSED:
//         this.props.onPause(event)
//         break
// 
//       default:
//     }
//   }
// 
//   /**
//    * https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange
//    *
//    * @param {Object} event
//    *   @param {Float} data    - playback rate
//    *   @param {Object} target - actual YT player
//    */
//   onPlayerPlaybackRateChange = (event) => this.props.onPlaybackRateChange(event)
// 
//   /**
//    * https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange
//    *
//    * @param {Object} event
//    *   @param {String} data   - playback quality
//    *   @param {Object} target - actual YT player
//    */
//   onPlayerPlaybackQualityChange = (event) => this.props.onPlaybackQualityChange(event)
// 
//   /**
//    * Initialize the YouTube Player API on the container and attach event handlers
//    */
//   createPlayer = () => {
//     // do not attempt to create a player server-side, it won't work
//     if (typeof document === 'undefined') return
//     // create player
//     const playerOpts = {
//       ...this.props.opts,
//       // preload the `videoId` video if one is already given
//       videoId: this.props.videoId,
//     }
//     this.internalPlayer = youTubePlayer(this.container, playerOpts)
//     // attach event handlers
//     this.internalPlayer.on('ready', this.onPlayerReady)
//     this.internalPlayer.on('error', this.onPlayerError)
//     this.internalPlayer.on('stateChange', this.onPlayerStateChange)
//     this.internalPlayer.on('playbackRateChange', this.onPlayerPlaybackRateChange)
//     this.internalPlayer.on('playbackQualityChange', this.onPlayerPlaybackQualityChange)
//   }
// 
//   /**
//    * Shorthand for destroying and then re-creating the YouTube Player
//    */
//   resetPlayer = () => this.internalPlayer.destroy().then(this.createPlayer)
// 
//   /**
//    * Method to update the id and class of the YouTube Player iframe.
//    * React should update this automatically but since the YouTube Player API
//    * replaced the DIV that is mounted by React we need to do this manually.
//    */
//   updatePlayer = () => {
//     this.internalPlayer.getIframe().then((iframe) => {
//       if (this.props.id) iframe.setAttribute('id', this.props.id)
//       else iframe.removeAttribute('id')
//       if (this.props.className) iframe.setAttribute('class', this.props.className)
//       else iframe.removeAttribute('class')
//       if (this.props.opts && this.props.opts.width) iframe.setAttribute('width', this.props.opts.width)
//       else iframe.removeAttribute('width')
//       if (this.props.opts && this.props.opts.height) iframe.setAttribute('height', this.props.opts.height)
//       else iframe.removeAttribute('height')
//     })
//   }
// 
//   /**
//    *  Method to return the internalPlayer object.
//    */
//   getInternalPlayer = () => {
//     return this.internalPlayer
//   }
// 
//   /**
//    * Call YouTube Player API methods to update the currently playing video.
//    * Depending on the `opts.playerVars.autoplay` this function uses one of two
//    * YouTube Player API methods to update the video.
//    */
//   updateVideo = () => {
//     if (typeof this.props.videoId === 'undefined' || this.props.videoId === null) {
//       this.internalPlayer.stopVideo()
//       return
//     }
// 
//     // set queueing options
//     let autoplay = false
//     const opts = {
//       videoId: this.props.videoId,
//     }
//     if ('playerVars' in this.props.opts) {
//       autoplay = this.props.opts.playerVars.autoplay === 1
//       if ('start' in this.props.opts.playerVars) {
//         opts.startSeconds = this.props.opts.playerVars.start
//       }
//       if ('end' in this.props.opts.playerVars) {
//         opts.endSeconds = this.props.opts.playerVars.end
//       }
//     }
// 
//     // if autoplay is enabled loadVideoById
//     if (autoplay) {
//       this.internalPlayer.loadVideoById(opts)
//       return
//     }
//     // default behaviour just cues the video
//     this.internalPlayer.cueVideoById(opts)
//   }
// 
//   refContainer = (container) => {
//     this.container = container
//   }
// 
//   render() {
//     return (
//       <div className={this.props.containerClassName}>
//         <div id={this.props.id} className={this.props.className} ref={this.refContainer} />
//       </div>
//     )
//   }
// }
