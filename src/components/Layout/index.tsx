// top level imports
import * as React from "react"

// Gatsby
import { Link } from "gatsby"

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
    return (
        <div className={'container'}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}