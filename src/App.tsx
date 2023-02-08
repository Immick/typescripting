import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      test
       <main>
        <BrowserRouter>
          <Route path="/" element={<Home/>} />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
