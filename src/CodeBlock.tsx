import React from 'react'
import Highlight from 'react-highlight'
import "highlight.js/styles/nord.css"


export const CodeBlock = ({language, value}) => (
  <div className="code-block">
    <Highlight className={language}>
      {value}
    </Highlight>
  </div>
)

