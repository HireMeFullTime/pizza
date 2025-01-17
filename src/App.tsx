import './App.css';

import { Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';

import Error from './components/Error';
import Layout from './components/layout/Layout';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/HomePage'));
const Ingredients = lazy(() => import('./pages/IngredientsPage'));
const Actions = lazy(() => import('./pages/ActionsPage'));

const PizzaDetails = lazy(() => import('./pages/PizzaDetailsPage'));
const IngredientDetails = lazy(() => import('./pages/IngredientDetailsPage'));
const ActionDetails = lazy(() => import('./pages/ActionDetailsPage'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:pizzaName" element={<PizzaDetails />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route
              path="/ingredients/:ingredientName"
              element={<IngredientDetails />}
            />
            <Route path="/actions" element={<Actions />} />
            <Route path="/actions/:actionName" element={<ActionDetails />} />
            <Route path="*" element={<Error content="Page not found" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
