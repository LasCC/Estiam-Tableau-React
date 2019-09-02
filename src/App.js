import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx'
import FirstContent from './components/FirstContent.jsx'
import NextCourse from './components/NextCourse.jsx'
import FutureCourse from './components/FutureCourse.jsx'

function App() {
  return (
    <div className="container">
      <SearchBar />
      <FirstContent />
      <NextCourse />
      <FutureCourse />
    </div>
  );
}

export default App;