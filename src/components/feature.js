import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from './article-preview.module.css'
import * as heroStyles from '../components/hero.module.css'

const DESC_MAX_LENGTH = 250;

export default ({ article }) => {
  const image = getImage(article.heroImage)
  return <div>
  {/* <div className={styles.preview}> */}
    {/* <Img alt="" fluid={article.heroImage.fluid} /> */}
    <div className={heroStyles.hero}>
    <GatsbyImage
              image={image}
              className={heroStyles.heroImagePortrait}
              alt={article.title} />
          </div>
    {/* <h3 className={styles.previewTitle}>
      <Link to={`/use-case/${article.slug}`}>{article.headline.headline}</Link>
    </h3> */}
    {/* <small>{article.publishDate}</small> */}
    {/* <p
      dangerouslySetInnerHTML={{
        __html: article.sectionContent.childMarkdownRemark.html,
      }}
    /> */}

    {/* <p>{article.sectionContent.sectionContent.substring(0, DESC_MAX_LENGTH)}... </p> */}
  </div>
}