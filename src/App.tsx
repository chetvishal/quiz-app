import React from 'react';
import {Home, QuizPage, FinalScore} from './pages/index'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/finalscore" element={<FinalScore />} />
      </Routes>
    </div>
  );
}

export default App;
