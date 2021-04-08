import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

import * as heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const image = getImage(post.heroImage)
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <GatsbyImage
              image={image}
              className={heroStyles.heroImage}
              alt={post.title} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
