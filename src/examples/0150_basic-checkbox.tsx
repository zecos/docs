import React from 'react'
import { Checkbox } from '@zecos/input-basic'

const Example = () => {
  const { PottyTrained, PottyTrainedDisplay } = Checkbox({
    init: false,
    name: "pottyTrained"
  })

  return (
    <div>
      <PottyTrained />
      <PottyTrainedDisplay />
    </div>
  )
}

export default Example