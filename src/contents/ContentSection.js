import { useSelector } from 'react-redux';
import React, { useContext } from 'react'
import cx from 'classnames'
import { DataContext } from '../dataContext'
import { getVideoCurrentTime } from '../video'
import { ContentListItem } from './ContentListItem'
import styles from './ContentSection.module.scss'
import { getActiveContentIndexForTime } from './getActiveContentIndexForTime'
import { getShowContent } from './selectors';
import { ToggleContentButton } from './ToggleContentButton'

export const ContentSection = () => {
  const { contents } = useContext(DataContext)
  const showContent = useSelector(getShowContent)
  const currentTime = useSelector(getVideoCurrentTime)
  const activeContent = getActiveContentIndexForTime(
    contents,
    currentTime,
  )

  const containerClassName = cx(
    styles.container,
    { [styles.showContents]: showContent },
  )

  return (
    <section className={containerClassName}>
      <div className={styles.wrapper}>
        {contents.map((content, index) => (
          <ContentListItem
            key={content.title + index}
            title={content.title}
            content={content.content}
            isActive={activeContent === index}
          />
        ))}
      </div>

      <ToggleContentButton />
    </section>
  )
}
