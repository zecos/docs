import React from 'react'
import { TextInput, SimpleFormLayout } from '@zecos/input-mui'
import { Button } from '@material-ui/core'
import { validateName } from '@zecos/validate'
import { createMulti } from '@zecos/input'


const Multi:any = createMulti(({items}) => {
  return <>
    {items.map((Input, i) => <Input.Cmpt key={i} />)}
  </>
})

const newSimple = () => SimpleFormLayout({
  name: 'form',
  items: [
    TextInput({
      validate: validateName,
      name: "firstName"
    }),
    TextInput({
      validate: validateName,
      name: "lastName",
    }),
  ],
})

const MultiForm = () => {
  const {actions, FirstNames} = Multi({
    init: [
      newSimple()
    ],
    name: "firstNames",
  })
  
  return <div>
      <FirstNames />
      <Button variant="contained" onClick={() => actions.push(newSimple)}>Add Name</Button>
    </div>
}


export default MultiForm