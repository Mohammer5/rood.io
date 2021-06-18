import propTypes from 'prop-types'
import cx from 'classnames'
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { DataContext } from '../dataContext'
import styles from './ContentListItem.module.scss'

const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

export const ContentListItem = ({ isActive, content, title }) => {
  const { title: presentationTitle } = useContext(DataContext)
  const className = cx(styles.content, { [styles.active]: isActive })
  const lines = content.split(/\n/)

  const emptyLineRegExp = new RegExp("^ *$")
  if (emptyLineRegExp.test(lines[0])) {
    lines.shift()
  }

  const [leadingSpaces] = lines[0].match(/^\s*/)
  const actualContent = lines
    .map(line => line.replace(new RegExp(`^${leadingSpaces}`, 'g'), ''))
    .join('\n')

  return (
    <div key={title} className={className}>
      <article className={styles.contentWrapper}>
        <h1 className={styles.title}>
          <span className={styles.presentationTitle}>
            {presentationTitle}
          </span>
          <span className={styles.contentTitle}>
              {title}
          </span>
        </h1>

        <div className={styles.contentBody}>
          <ReactMarkdown
            components={components}
            remarkPlugins={[gfm]}
            children={actualContent}
          />
        </div>
      </article>
    </div>
  )
}

ContentListItem.propTypes = {
  content: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
}
