import React, { Component } from 'react'
import BlogPost from '../templates/blog-post'

export default class PostPreview extends Component {
  render () {
    const data = {
      markdownRemark: {
        frontmatter: {
          title: this.props.entry.getIn(['data', 'title']),
          description: this.props.entry.getIn(['data', 'description']),
          date: this.props.entry.getIn(['data', 'date'])
        },
        html: this.props.widgetFor('body')
      },
      site: {
        siteMetadata: {
          title: 'jasonball.me'
        }
      }
    }
    const location = 0
    const pageContext = {}
    return (
      <BlogPost data={data} location={location} pageContext={pageContext} />
    )
  }
}
