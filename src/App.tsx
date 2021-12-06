import React, { useEffect } from 'react';
import './App.css';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/merge-sort');
    }
  },);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="merge-sort">Merge Sort</NavLink>
          <NavLink to="selection-sort">Selection Sort</NavLink>
          <NavLink to="quick-sort">Quick Sort</NavLink>
          <NavLink to="insertion-sort">Insertion Sort</NavLink>
          <NavLink to="bubble-sort">Bubble Sort</NavLink>
          <NavLink to="tim-sort">Timsort</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
