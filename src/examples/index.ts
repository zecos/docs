export const examples = {
  "0000_overview": {
    cmpt: require('./0000_overview'),
    content: "import React from 'react'\nimport { Text } from '@zecos/input-basic'\nimport { validateName } from '@zecos/validate'\n\n\nconst Example = () => {\n  const {FirstNameDisplay, FirstName} = Text({\n    name: \"firstName\",\n    validate: validateName\n  })\n  \n  return (\n    <>\n      <FirstName />\n      <FirstNameDisplay full={true} />\n    </>\n  )\n}\n\nexport default Example"
  }
}