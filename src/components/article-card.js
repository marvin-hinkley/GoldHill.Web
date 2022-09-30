import React from "react"
import { Link, graphql } from "gatsby"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="px-4 py-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-neutral-700">{article.MeetingType} Meeting</h3>
          <span>{article.Date}</span>
        </div>
        <p className="line-clamp-2 mt-2 text-neutral-500">
          <Link to={article.Attachments.url}>{article.Attachments.name}</Link>
        </p>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_MEETING_AGENDA {
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
`

export default ArticleCard