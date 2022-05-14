import React, { useState } from 'react'
import { Layout } from './components/Layout/Layout'

function App () {
  const [cargas, setCargas] = useState([])

  return (
    <section>
      <article>
        <Layout
          cargas={cargas}
        />
      </article>
    </section>
  )
}

export default App
