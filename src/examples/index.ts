export const examples = {
  "0000_overview": {
    cmpt: require('./0000_overview'),
    content: "import React from 'react'\nimport { Text } from '@zecos/input-basic'\nimport { validateName } from '@zecos/validate'\n\n\nconst Example = () => {\n  const {FirstNameDisplay, FirstName} = Text({\n    name: \"firstName\",\n    validate: validateName\n  })\n  \n  return (\n    <>\n      <FirstName />\n      <FirstNameDisplay full={true} />\n    </>\n  )\n}\n\nexport default Example"
  },"0010_field": {
    cmpt: require('./0010_field'),
    content: "import React, { useState } from 'react'\nimport { field } from '@zecos/field'\nimport { validateName } from \"@zecos/validate\"\n\nconst renderErrors = state => {\n  const {touched, errors} = state\n  if (touched && errors.length) {\n    return (\n      <span style={{color: \"red\"}}>\n        {errors.map(err => <div>{err.toString()}</div>)}\n      </span>\n    )\n  }\n}\n\nconst Form = () => {\n  const [[actions, state], _setFormState] = useState(() => {\n    const _field = field({\n      init: '',\n      validate: validateName,\n    })\n    return [_field, _field.getState()]\n  })\n  \n  const {\n    setValue,\n    setTouched,\n    reset,\n    setState,\n    getState\n  } = actions\n  \n  const setFormState = state => _setFormState([actions, state])\n  \n  const {\n    errors,\n    value,\n    touched,\n    pristine\n  } = actions.getState()\n  \n  return (\n    <form style={{padding: 20}}>\n      <label htmlFor=\"name\">Name: </label>&nbsp;\n      <input\n        name=\"name\"\n        value={value}\n        onChange={e => setFormState(setValue(e.target.value))}\n        onBlur={_ => setFormState(setTouched())}\n      />\n      <br />\n      {renderErrors(state)}\n    </form>\n  )\n}\n\nexport default Form\n"
  },"0020_create-input": {
    cmpt: require('./0020_create-input'),
    content: "import React from \"react\"\nimport { createInput } from '@zecos/input'\nimport { validateName } from \"@zecos/validate\"\n\nconst text = createInput(({helpers, state}) => {\n    const {\n      id,\n      name,\n      label,\n      value,\n      handleChange,\n      handleBlur,\n    } = helpers\n    \n    const {touched, errors} = state\n    return (\n      <div>\n        <label htmlFor={name}>\n          {label}: &nbsp;\n        {touched && errors[0].toString()}\n        </label>\n        <input\n          name={name}\n          aria-label={label}\n          onChange={handleChange}\n          value={value}\n          onBlur={handleBlur}\n          id={id}\n        />\n      </div> \n    )\n})\n\nconst Form = () => {\n  const {FirstName, FirstNameDisplay} = text({\n    name: \"firstName\",\n    validate: validateName,\n    init: \"Bob\",\n  })\n\n  return (\n    <form className=\"form\">\n      <FirstName /><br />\n      <FirstNameDisplay full={true} />\n    </form> \n  )\n}\n\nexport default Form"
  }
}