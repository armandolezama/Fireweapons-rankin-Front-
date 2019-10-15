import React, {Fragment} from 'react';
import Header from './Header'
import Footer from './Footer'
import WeaponsContainer from './WeaponsContainer'

function App() {
  return (
    <Fragment>
      <Header title='Ranking from Demo Ranch'/>
      <WeaponsContainer/>
      <Footer/>
    </Fragment>
  )
}

export default App;
