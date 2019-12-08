import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import { divideDateAndPath } from '../../utils/frontmatter'

import './index.scss'

export const ThumbnailItem = ({ node }) => {
  const [date, path] = useMemo(() => divideDateAndPath(node.field.slug), [
    nodef,
  ])
  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={path}>
      <article key={node.fields.slug}>
        <h3>
          {node.frontmatter.title}
          <time className="thumbnail-date" dateTime={date}>
            {date}
          </time>
        </h3>
        <article dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </article>
    </Link>
  )
}
