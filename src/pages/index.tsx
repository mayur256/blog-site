// top level imports
import * as React from "react"

// Gatsby API
import { HeadFC, Link, PageProps } from "gatsby"

// Custom Components
import { Layout } from "../components/Layout"

// Component definition
const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="Blog Home Page">
            <p>A simple blog website built to learn and understand gatsby js</p>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage
