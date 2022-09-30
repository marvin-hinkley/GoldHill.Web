import React from "react"
import { Link, graphql } from "gatsby"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/agenda/${article.Slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="px-4 py-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-neutral-700">{article.MeetingType} Meeting</h3>
          <span>{article.Date}</span>
        </div>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_MEETING_AGENDA {
    Slug
    Date
    Title
    MeetingType
  }
`

export default ArticleCard