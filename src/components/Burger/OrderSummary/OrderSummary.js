import React, {Component} from 'react';

import Button from '../../UI/Button/Button';

import Aux from '../../../hoc/RootAux/RootAux';

class OrderSummary extends Component {
    // this could be a functional component... does not have to be a class component
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style= {{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price:</strong> {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType={'Danger'} clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType={'Success'} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;