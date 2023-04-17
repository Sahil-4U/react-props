import React from 'react'

function Elements(props) {
  return (
    <div>
        <center><h3>{props.heading}</h3></center>
        <div className='elements-text-container'>
            <p>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default Elements