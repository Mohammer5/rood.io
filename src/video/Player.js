import React, { useContext } from 'react'
import { DataContext } from '../dataContext'
import { HTML5Player } from './HTML5Player';
import styles from './Player.module.scss'
import { YouTubePlayer } from './YouTubePlayer'

export const Player = () => {
  const { video } = useContext(DataContext)

  return (
    <div id="player" className={styles.player}>
      {video.type === 'HTML5' && (
        <HTML5Player
          posterUrl={video.posterUrl}
          videoUrl={video.url}
          duration={video.duration}
        />
      )}

      {video.type === 'YOUTUBE' && (
        <YouTubePlayer videoId={video.id} />
      )}
    </div>
  )
}
