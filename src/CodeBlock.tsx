import React from 'react'
import Highlight from 'react-highlight'
import { examples } from './examples/index'
import styles from './CodeBlock.module.css'
import "highlight.js/styles/nord.css"


const startTag = "example:"
export const CodeBlock = ({language, value}) => {
  if (language === "tsx") {
    language = "jsx"
  }
  if (value.startsWith(startTag)) {
    const id = value.substr(startTag.length)
    value = examples[id].content
    const Cmpt = examples[id].cmpt.default
    
    return (
      <>
      <div className="code-block">
        <Highlight className={language}>
          {value}
        </Highlight>
      </div>
      <div className={styles.result}>Result</div>
      <div className={styles.example}>
        <Cmpt />
      </div>
      </>
    )
  }
  return (
    <div className="code-block">
      <Highlight className={language}>
        {value}
      </Highlight>
    </div>
  )
}

