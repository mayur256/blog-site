// top level imports
import * as React from "react"

// Gatsby
import { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

// Custom Components
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

// Component definition
const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="Blog Home Page">
            <p>A simple blog website built to learn and understand gatsby js</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/pitbull.webp"
            />
        </Layout>
    )
}

export const Head: HeadFC = () => <Seo title="Home Page"/>

export default IndexPage
