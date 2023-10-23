import React from 'react';
import AppHeader from './project/components/AppHeader';
import { Provider } from 'react-redux';
import HomePage from './project/components/HomePage';
import projectStore from './project/reduxProject/projectStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCartPage from './project/components/ShoppingCartPage';
import Pastries from './project/components/Pastries';
import ShowPastry from './project/components/ShowPastry';
import WishlistPage from './project/components/WishlistPage';
import Paymaent from './project/components/Payment';
import About from './project/components/About';
import Footer from './project/components/Footer';
//styles
import "../src/project/styles/aboutStyle.css";
import "../src/project/styles/advertisement.css";
import "../src/project/styles/appStyle.css";
import "../src/project/styles/bookStyle.css";
import "../src/project/styles/cartStyle.css";
import "../src/project/styles/footerStyle.css";
import "../src/project/styles/headerStyle.css";
import "../src/project/styles/homeStyle.css";
import "../src/project/styles/pastriesStyle.css";
import "../src/project/styles/paymentStyle.css";


function App() {


  return (
    <div className="App">
      
      <Provider store={projectStore}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppHeader></AppHeader>
          <body>
          <Routes>
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/pastries/:category/:subCategory' element={<Pastries />} />
            <Route exact path='/shoppingCart' element={<ShoppingCartPage />} />
            <Route exact path='/wishlist' element={<WishlistPage />} />
            <Route exact path='/showPastry/:id' element={<ShowPastry />} />
            <Route exact path='/payment/:total/:discount' element={<Paymaent />} />
            <Route exact path='/about' element={<About />} />

          </Routes>
          </body>
          <Footer></Footer>
        </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
