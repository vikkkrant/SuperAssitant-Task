import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Line from './Components/Line'
import Question1 from './Components/Question1';
import Question2 from './Components/Question2';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Question3 from "./Components/Question3";


const App = () => {

  return (
    <DndProvider backend={HTML5Backend}>
    <div>
      <Navbar/>
      <Line/>
      <div style={styles.container}>
      <Question1 />
      <Question2 />
      // <Question3/>
    </div>
    </div>
    </DndProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#111',
  },
};

export default App;


