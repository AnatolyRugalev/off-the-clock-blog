
import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import * as styles from "./socials.module.css"

const Socials = () => {
    const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          social {
            twitter
            discussions
          }
        }
      }
    }
  `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const social = data.site.siteMetadata?.social

    return (
        <div className={styles.socials}>
            <a className={styles.twitter} href={social.twitter} target="_blank" rel="noreferrer" title="Hit me up on Twitter">Twitter</a>
            <a className={styles.github} href={social.discussions} target="_blank" rel="noreferrer" title="Join Discussion on GitHub">GitHub Discussions</a>
        </div>
    )
}

export default Socials
