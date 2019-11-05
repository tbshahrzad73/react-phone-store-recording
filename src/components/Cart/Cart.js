import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmprtyCart from './EmptyCart';
import CartList from './CartList';
import {ProductConsumer} from '../../context';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} =value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                  <Title name="your" title="cart"/>
                                  <CartColumns />
                                  <CartList value={value} />
                                  <CartTotals value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmprtyCart />;
                        }
                    }}
                </ProductConsumer>             
            </section>
        );
    }
}