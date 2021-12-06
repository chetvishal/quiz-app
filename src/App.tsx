import React, { useState } from 'react';
import { Home, QuizPage, FinalScore } from './pages/index'
import { Routes, Route } from "react-router-dom";

function App() {

  const [darkChecked, setDarkChecked] = useState<any>(false)
  return (
    <div className={`App text-center p-4 ${darkChecked ? 'dark dark: bg-gray-800' : ''} sm:h-full lg:h-screen`}>
      <Routes>
        <Route path="/" element={<Home darkChecked={darkChecked} setDarkChecked={setDarkChecked} />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/finalscore" element={<FinalScore />} />
      </Routes>
    </div>
  );
}

export default App;
