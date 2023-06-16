// top level imports
import * as React from "react"

// Gatsby API
import { Link } from "gatsby"
// Gatsby types
import type { HeadFC, PageProps } from "gatsby"

// Custom components
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

// Component definition
const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="Blog About Page">
            <p>This page will contains some really nice details about the author of the site</p>
        </Layout>
    )
}

export const Head: HeadFC = () => {
    return (
        <>
            <Seo title="About Page" />
            <meta name="description" content="Your description" />
        </>
    )
}

export default AboutPage
