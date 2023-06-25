import React from 'react'
import App from "./App";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Start from "./Components/Start/Start";
const App1 = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path="/" element={<Start />} />
      <Route path="/app" element={<App />} />
    </Routes>
   </Router> 
    </div>
  )
}

export default App1