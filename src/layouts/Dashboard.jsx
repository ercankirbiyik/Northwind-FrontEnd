import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import ProductAdd from "../pages/ProductAdd";

import { Grid } from 'semantic-ui-react';
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css"; 




export default function Dashboard() {
  return (
    <div>
       <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
               <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>

          <Route exact path="/" component={ProductList} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:name" component={ProductDetail} />
          <Route exact path="/cart" component={CartDetail} />
          <Route exact path="/product/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
     
    </div>
  );
}

// route işlemini istediğimiz ana componentde yapabiliriz.
// biz roota tıklayınca, productList componenti değişcek. o yüzden bir root'u productlis kısmını silip oraya ekleyeğic 
//(Grid.column withd={12} kısmının içi)

// rout'un çalışabilmesi için,bizim ana birleşinizimi browser rooter ile sarmalamamız gerekli.=> index.js deki app

//   <Route path="/" component={ProductList} /> sana ana sayfa dediğimde(path olarak) bana bunu ver demiş oluyoruz.
// exact => tam yol demek. default'u true. 