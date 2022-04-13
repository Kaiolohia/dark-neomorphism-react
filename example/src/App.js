import React from 'react'

import { ExampleComponent, Btn, Input } from 'dark-neomorphism-react'
import 'dark-neomorphism-react/dist/index.css'

const App = () => {
  var tempStyle = {"width" : "200px"}
  return (
  <div>
    <ExampleComponent text="Dark Neomorphism React Components" />
    <Btn value="Button"/>
    <Input label="Input" style={tempStyle}/>
  </div>
  )
}

export default App
