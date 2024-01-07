import './App.css';
import Cart from './Cart';
import { CartProvider } from './CartProvider';

import Header from './Header';
import AvailableProducts from './Products';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <AvailableProducts />
      </div>
    </CartProvider>
  );
}

export default App;
