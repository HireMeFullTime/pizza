import './App.css';

import { Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';

import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/HomePage'));
const Ingredients = lazy(() => import('./pages/IngredientsPage'));
const Actions = lazy(() => import('./pages/ActionsPage'));

const PizzaDetails = lazy(() => import('./pages/PizzaDetailsPage'));
const IngredientDetails = lazy(() => import('./pages/IngredientDetailsPage'));
const ActionDetails = lazy(() => import('./pages/ActionDetailsPage'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:pizzaName" element={<PizzaDetails />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route
              path="/ingredients/:ingredientName"
              element={<IngredientDetails />}
            />
            <Route path="/actions" element={<Actions />} />
            <Route path="/actions/:actionName" element={<ActionDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
