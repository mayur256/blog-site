// top level imports
import * as React from "react"

// Gatsby types
import type { HeadFC, PageProps } from "gatsby"

// Component definition
const AboutPage: React.FC<PageProps> = () => {
    return (
        <main>
            <h1>Blog About Page</h1>
            <p>This page will contains some really nice details about the author of the site</p>
        </main>
    )
}

export const Head: HeadFC = () => {
    return (
        <>
            <title>About Page</title>
            <meta name="description" content="Your description" />
        </>
    )
}

export default AboutPage
