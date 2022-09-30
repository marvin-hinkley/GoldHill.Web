import React from "react"

import Alert from "./alert"
import "../scss/alert-grid.scss"

const Alerts = ({alerts}) => {
  return (
    <div className="alert-grid m-3 justify-center">
      {alerts.map(alert => {
        <Alert alert={alert} />
      })}
    </div>
  )
}

export default Alerts
