/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Socials from "./socials";
import {useStaticQuery, graphql} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import * as styles from "./bio.module.css"

const Bio = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author

    return (
        <div className={styles.bio}>
            <StaticImage
                className={styles.avatar}
                formats={["auto", "webp", "avif"]}
                placeholder={"blurred"}
                src="../images/profile-pic.jpg"
                quality={95}
                alt="Toly's face"
            />
            <div className={styles.details}>
            <p>
                <strong>{author.name}</strong><br/>
                A time when we are all humans again
            </p>
            <Socials />
            </div>
        </div>
    )
}

export default Bio
