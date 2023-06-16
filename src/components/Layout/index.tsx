// top level imports
import * as React from "react"

// Gatsby
import { Link, useStaticQuery, graphql } from "gatsby"

// CSS modules
import "./layout.css";

// Props type definition
interface IProps {
    pageTitle: string;
    children: React.ReactNode
}

// Component definition
export const Layout: React.FC<IProps> = ({
    pageTitle,
    children
}) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `)
    
    return (
        <div className={'container'}>
            <header>{data.site.siteMetadata.title}</header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}