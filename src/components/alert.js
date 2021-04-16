import React from "react"

const Alert = props => {
  let icon
  let foreColor, backColor
  switch (props.alert.Severity) {
    case "Information":
      icon = "fa-info-circle"
      backColor = `from-blue-900`
      foreColor = `text-blue-400`
      break
    case "Warning":
      icon = "fa-radiation-alt"
      backColor = `from-orange-900`
      foreColor = `text-orange-400`
      break
    case "Danger":
      icon = "fa-dumpster-fire"
      backColor = `from-red-900`
      foreColor = `text-red-400`
      break

    default:
      break
  }

  return (
    <div
      className={`h-25 p-3 flex items-center bg-gray-800  rounded bg-gradient-to-r ${backColor} via-gray-800 to-gray-800`}
    >
      <i className={`fas ${icon} text-2xl ${foreColor} mr-10`}></i>
      <div>
        <h1 className={`${foreColor} text-lg`}>{props.alert.Title}</h1>
        <p
          className="text-md"
          dangerouslySetInnerHTML={{ __html: props.alert.Body }}
        />
      </div>
    </div>
  )
}

export default Alert
