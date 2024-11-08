import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
// importing the component from the library
import { Products } from '@react-monorepo/products';

function Food() {
  return <h1>Food</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Food />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
}

export default App;