import React, { Component } from 'react';
// import classes from './Orders.module.css'

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('orders.json')
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((error) => console.error(error));
  }

  render() {
    let orders = null;
    if (this.state.loading) {
      orders = <Spinner />;
    } else {
      orders = (
        <React.Fragment>
          {this.state.orders.map((order) => {
            return (
              <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
              />
            );
          })}
        </React.Fragment>
      );
    }
    return <div className="">{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
