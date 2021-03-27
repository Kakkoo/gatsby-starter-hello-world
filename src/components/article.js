import React from 'react'
import {Link} from 'gatsby'

export default function article(props) {
  return (
    <div>
      <Link to={props.to}>
        <article key={props.id}>
          <div>
            <img src={"http://source.unsplash.com/150x150/?" + props.keywords} /> 
          </div>
          <div>
            <h3>
              {props.title}
            </h3>
            <div>
              {props.excerpt}
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}
