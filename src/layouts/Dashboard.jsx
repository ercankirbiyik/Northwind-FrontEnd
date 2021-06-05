import React from "react";
import Categories from "./Categories";
import CartSummary from "./CartSummary";
import ProductList from "../pages/ProductList"
import { Button, Container, Grid, GridColumn, GridRow, Menu } from "semantic-ui-react";
 
export default function Dashboard() {
  return (
    <div>
      <Grid>
           <GridRow>
               <GridColumn width={4}>
               <Categories/>
               </GridColumn>
               <GridColumn width={12}>
                <ProductList/> 
               </GridColumn>
           </GridRow>
       </Grid>

    </div>
  );
}