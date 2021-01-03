import React from "react"
import ReactDOM from "react-dom"
import App from "./App"


function Testing(){
  const date = new Date()
  return (
      <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))