import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout'

import * as heroStyles from '../components/hero.module.css'

class UseCaseTemplate extends React.Component {
  render() {
    const useCase = get(this.props, 'data.contentfulUseCase')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${useCase.headline.headline} | ${siteTitle}`} />
          {/* <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div> */}
          <div className="wrapper">
            <h1 className="section-headline">{useCase.headline.headline}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {useCase.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: useCase.sectionContent.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default UseCaseTemplate

export const pageQuery = graphql`
  query UseCaseBySlug($slug: String!) {
    contentfulUseCase(slug: { eq: $slug }) {
      headline {
          headline
      }
      sectionContent {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
