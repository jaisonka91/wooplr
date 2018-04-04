import React, { Component } from 'react';

export default class Price extends Component {

  render() {
    const { salesPrice, retailPrice } = this.props;
    let offValue = (salesPrice/retailPrice)*100;
    offValue = Math.round(100-offValue);
    return (
      <div className="price">
        <span className="sales-price">{`₹ ${salesPrice}`}</span>
        <span className='retail-price'>{`₹ ${retailPrice}`}</span>
        <span className='off-price'>{`${offValue}% off`}</span>
      </div>
    );
  }
}
