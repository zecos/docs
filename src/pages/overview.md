# Overview

`@zecos/inputs` and its derivatives are libraries that aim to improve the developer experience (DX) by allowing you to

* reduce boilerplate
* maintain flexibility
* maintain scalability

You can get started with nearly zero-setup and should be able to create an input with one line. Here is a simple text field input:

```tsx
import { useText } from '@zecos/inputs-basic'

const Example = () => {
  const [FirstName, nameState] = useText({name: "firstName"})

  return <>
    <Name /><br /><br />
    Name State: {JSON.stringify(nameState)}
  </>
}
```

That is an overly simplified example without any data validation, but you see how simple creating an input can be.

But this along with other features of the `@zecos/inputs` family can be composed to build powerful UI tools. It is also easy to export your UI library for others to use or utilize someone else's. I have created two so far:

* [@zecos/inputs-basic](/inputs-basic)
* [@zecos/inputs-mui](/inputs-mui).