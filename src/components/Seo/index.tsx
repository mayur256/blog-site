import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// Props type definition
interface IProps {
    title: string
}

export const Seo: React.FC<IProps> = ({ title }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <title>{title} | {data.site.siteMetadata.title}</title>
    )
}
