import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroComponent from "../components/hero"
import QuickLinks from "../components/quick-links"
import Alerts from "../components/alerts"
import ArticleGrid from "../components/article-grid"

const IndexPage = () => {
  const {
    allStrapiAlert,
    allStrapiMeetingAgenda,
    strapiHero
  } = useStaticQuery(query);

  return (
    <Layout>
      <Seo title="Home" />
      <HeroComponent hero={strapiHero} />
      <Alerts alerts={allStrapiAlert.nodes} />
      <ArticleGrid articles={allStrapiMeetingAgenda.nodes} />
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
    allStrapiMeetingAgenda {
      nodes {
        ...ArticleCard
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