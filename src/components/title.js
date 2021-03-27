import React from 'react'

export default function title(props) {
  return (
    <div>
      <section>
        <h1>{props.text}</h1>
        <div>{props.subtitle}</div>
      </section>
    </div>
  )
}
