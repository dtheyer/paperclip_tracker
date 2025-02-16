import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SimpleGraph from './SimpleGraph.jsx'
import './App.css'
import { trackedVars } from './trackedVars.js'



function App() {
  const [dataMap, setDataMap] = useState({})

  let updateCount = () => {
    chrome.storage.local.get(trackedVars, function(items) {
      setDataMap(items);
    });
  }

  let resetdata = () => {
    for (let target of trackedVars) {
      chrome.storage.local.set({[target]: []})
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCount();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const graphs = trackedVars.map((target) => {
    return <>
      <SimpleGraph data={dataMap[target] ?? []} label={target}/>
      <br/>
    </>
  });


  return (
    <>
      <h1>Paperclip Tracker</h1>
      <div className="card">
        {graphs}
      </div>
      <button onClick={resetdata}>
          Clear data
      </button>
    </>
  )
}

export default App
