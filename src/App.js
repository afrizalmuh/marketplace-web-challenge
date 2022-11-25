import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
