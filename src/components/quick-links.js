import React from "react"
import "../scss/link-grid.scss"

const QuickLinks = props => {
  return (
    <div className="link-grid p-5 justify-center">
      {props.links.map(link => {
        return (
          <a
            className="text-center block p-5 border-solid border rounded border-1 border-gray-300 hover:bg-gray-300 hover:text-gray-800 hover:ring-4 hover:ring-red-300"
            href={link.URL}
          >
            {link.Text}
          </a>
        )
      })}
    </div>
  )
}

export default QuickLinks
