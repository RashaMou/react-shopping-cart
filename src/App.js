import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data'; 

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './contexts/CartContext';
import ProductContext from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	


	const addItem = item => {
		setCart([...cart, item])
	};

	const removeItem = item => {
		console.log('item from remove', item)
		setCart(cart.filter(cartItem => {
			return cartItem.id !== item.id
		}))
	};

	return (
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
				<div className="App">
					<Navigation cart={cart} />
					{/* Routes */}
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart}/>
					</div>	
				</CartContext.Provider>
			</ProductContext.Provider>
	
	);
}

export default App;
