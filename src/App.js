import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './views/Home/Home'
import Experiment from './views/Experiment/Experiment'
import Result from './views/Result/Result'
import Signup from './views/Signup/Signup'

const App = () => {

  const [gridData, setGridData] = useState([
    { id: 1, color: '#FFFFFF' },
    { id: 2, color: '#FFFFFF' },
    { id: 3, color: '#FFFFFF' },
    { id: 4, color: '#FFFFFF' },
    { id: 5, color: '#FFFFFF' },
    { id: 6, color: '#FFFFFF' },
    { id: 7, color: '#FFFFFF' },
    { id: 8, color: '#FFFFFF' },
    { id: 9, color: '#FFFFFF' }
  ]);

  const [data, setData] = useState({
    user_info:{
      firstname:'',
      lastname:'',
      age:0,
      email:''
    },
    raw_data: [],
    stimulusCount: {
      'Disgust': 0,
      'Anger_Annoyance': 0,
      'Fear': 0,
      'Sadness': 0,
      'Neutral': 0,
      'Happiness': 0
    }
  })


  return (
    <div>
      <Router>
        <Link to="/experiment"></Link>
        <Link to="result/"></Link>
        <Switch>
          <Route path="/signup">
            <Signup onSignup={(data) => setData(data)} userdata={data}/>
          </Route>
          <Route path="/experiment">
            <Experiment grid_Data={gridData}
              updateGridData={(data) => setGridData(data)}
              data={data}
              updatedData={(data) => setData(data)} />
          </Route>
          <Route path="/result">
            <Result gridData={gridData} Data={data} resetData={(data) => setData(data)} resetgridData={(data) => setGridData(data)}/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>


    </div>
  )
}

export default App
