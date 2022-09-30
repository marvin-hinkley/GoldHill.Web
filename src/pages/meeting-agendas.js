import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticleGrid from "../components/article-grid"

const MeetingAgendaPage = () => {
  const { allStrapiMeetingAgenda } = useStaticQuery(query);

  return (
    <Layout>
      <Seo title="Meeting Agendas" />
      <ArticleGrid articles={allStrapiMeetingAgenda.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query MeetingAgendaPageQuery {
    allStrapiMeetingAgenda {
      nodes {
        ...ArticleCard
      }
    }
  }
`

export default MeetingAgendaPage