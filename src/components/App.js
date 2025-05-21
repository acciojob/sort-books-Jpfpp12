
import React from 'react';
import BooksList from './BookList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Do not remove the main div */}
      <header className="text-2xl font-bold text-center my-6">Books List</header>
      <BooksList />
    </div>
  );
}

export default App;