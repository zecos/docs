## General @zecos/input derivative API

The inputs API exports 3 different of UI types

* [Inputs](#inputs)
* [Layouts](#layouts)
* [Multis](#multis)

### Inputs

### Layouts


### Multis

### What it looks like for the consumer

So, let's say that your user has passed in his options to your input creator, what does he get back?

He would get an object with the following properties:

* `Cmpt`: The input component
* `state`: The same `state` that you were passed
* `actions`: The same `actions` that you were passed
* `meta`:
  * just an object with the information that it is a input
  * it looks like this `{$$__input_type: 'input'}`
* `name`: the original `name` option passed to the input
* `display`:
  * displays the data in a react component
  * mostly for debugging purposes
  * can pass `{full: true}` to get full state information
* `log`:
  * logs the input data to the console
  * can pass `{full: true}` to get full state information
* `[UpperCamelName]`:
  * same thing as `Cmpt`
  * for convenience and namespacing
  * You don't want a million components called `Cmpt`
  * but you also want to be able to get the component without knowing its name
* `[name + "State"]`
  * same thing as `state`
  * if the `name` were `firstName`, then `[name + "State"]` would be `"myformState"`
* `[name + "Meta"]`: ...
* `[name + "Actions"]`: ...
* `[name + "Helpers"]`: ....
* `[UpperCamelName + "Display"]`: ...
* `["log" + UpperCamelName]`: ...

### What it looks like for the consumer

The consumer receives properties much like in [`createInput`](/input/create-input) and [`layout`](/input/create-layout):


* `Cmpt`: The multi component
* `items`: The same items that were passed to you
* `actions`: The same actions that were passed to you
* `errors`: The same errors that were passed to you
* `meta`:
  * just an object with the information that it is a `multi`
  * it looks like this `{$$__input_type: 'multi'}`
* `name`: the original `name` option passed to the `multi`
* `display`:
  * displays the data in a react component
  * mostly for debugging purposes
  * can pass `{full: true}` to get full state information
* `log`:
  * logs the input data to the console
  * can pass `{full: true}` to get full state information
* `[UpperCamelName]`:
  * same thing as `Cmpt`
  * for convenience and namespacing
  * You don't want a million components called `Cmpt`
  * but you also want to be able to get the component without knowing its name
* `[name + "Items"]`
  * same thing as `items`
  * if the `name` were `myForm`, then `[name + "Items"]` would be `"myformItems"`
* `[name + "Errors"]`: You get the picture
* `[name + "Meta"]`: ...
* `[name + "Helpers"]`: ....
* `[UpperCamelName + "Display"]`: ...
* `["log" + UpperCamelName]`: ...

And that's a wrap for the `multi`s. No go forth and `multi`ply.

