import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroComponent from "../components/hero"
import Alerts from "../components/alerts"

const IndexPage = () => {
  const {
    allStrapiAlert,
    strapiHero
  } = useStaticQuery(query);

  return (
    <Layout>
      <Seo title="Home" />
      <HeroComponent hero={strapiHero} />
      <Alerts alerts={allStrapiAlert.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allStrapiAlert {
      nodes {
        ...Alert
      }
    }
    strapiHero {
      Title
      Subtitle
      Link
      BackgroundImage {
        url
      }
    }
  }
`

export default IndexPage