import './App.css';

import { Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';

import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/HomePage'));
const Ingredients = lazy(() => import('./pages/IngredientsPage'));
const Actions = lazy(() => import('./pages/ActionsPage'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/Actions" element={<Actions />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
