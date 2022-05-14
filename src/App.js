import React, { useEffect, useState } from 'react'
import { Layout } from './components/Layout/Layout'

function App () {
  const [cargas, setCargas] = useState([])

  return (
    <section>
      <Layout
        cargas={cargas}
      />
    </section>
  )
}

export default App
