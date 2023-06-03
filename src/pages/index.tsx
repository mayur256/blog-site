// top level imports
import * as React from "react"

// Gatsby types
import type { HeadFC, PageProps } from "gatsby"

// Component definition
const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <h1>Blog Home Page</h1>
            <p>A simple blog website built to learn and understand gatsby js</p>
        </main>
    )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage
