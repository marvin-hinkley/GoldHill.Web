import React from "react"

import Alert from "./alert"
import "../scss/alert-grid.scss"

const Alerts = props => {
  return (
    <div className="alert-grid m-3 justify-center">
      {props.alerts.map(alert => {
        return <Alert alert={alert} key={alert.id} />
      })}
    </div>
  )
}

export default Alerts
