import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './containers/admiPanel/AdminPanel';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import Cart from './containers/cart/Cart';
import Home from './containers/home/Home';
import PrimarySearchAppBar from './containers/home/MenuAppBar';
import ProductDetail from './containers/ProductDetail/ProductDetail';
import AdminContextProvider from './context/AdminContext';
import ClientContextProvider from './context/ClientContext';
import Users from './containers/home/Users'

const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <PrimarySearchAppBar />
                    <Switch>
                        <Route exact path="/admin" component={AdminPanel} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/product-detail/:id" component={ProductDetail} />
                        <Route exact path ='/users' component={Users}/>
                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;