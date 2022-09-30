import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AgendaPage = ({ data }) => {
  const agenda = data.strapiMeetingAgenda
  const seo = {
    metaTitle: agenda.Title
  }

  return (
    <Layout as="agenda">
      <Seo seo={seo} />
      <header className="container max-w-4xl py-8">
        <h3 className="text-6xl font-bold text-neutral-700">{agenda.Title}</h3>
        <span>{agenda.Date}</span>
      </header>
      <main
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: agenda.Agenda.data.childMarkdownRemark.html }}
      ></main>
      <footer>
        <h4>Attachments</h4>
        {agenda.Attachments.map(attachment => {
          <Link to={attachment.url}>{attachment.name}</Link>
        })}
      </footer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiMeetingAgenda(Slug: { eq: $slug }) {
      Title
      Slug
      Date
      Agenda {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      MeetingType
      Attachments {
        url
        name
      }
    }
  }
`

export default AgendaPage