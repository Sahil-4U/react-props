import React from 'react'

function Elements(props) {
  return (
    <div>
        <center><h3>{props.heading}</h3></center>
        {/* here i am passing html elements as props */}
        <div className={props.properties}>
            <p>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default Elements