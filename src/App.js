import React, {Fragment} from 'react';
import Mycomponent from './Mycomponent'
import Footer from './Footer'
import WeaponsContainer from './WeaponsContainer'

function App() {
  return (
    <Fragment>
      <Mycomponent title='Ranking from Demo Ranch'/>
      <WeaponsContainer/>
      <Footer/>
    </Fragment>
  )
}

export default App;
