import React from "react"

import Alert from "./alert"
import "../scss/alert-grid.scss"

const Alerts = props => {
  let i = 0;

  return (
    <div className="alert-grid m-3 justify-center">
      {props.alerts.map(alert => {
        i++;
        return <Alert alert={alert.attributes} key={i} />
      })}
    </div>
  )
}

export default Alerts
