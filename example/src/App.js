import React from 'react'

import { Card, Btn, Input } from 'dark-neomorphism-react'
import styles from 'dark-neomorphism-react/dist/index.css'

const App = () => {
  var tempStyle = {"width" : "200px"}
  return (
  <div>
    <Card title="Dark Neomorphism React Components">
      <p className={styles.h1}>Test</p>
    </Card>
    <Btn value="Button"/>
    <Input label="Input" style={tempStyle}/>
    <Card>

    </Card>
  </div>
  )
}

export default App
