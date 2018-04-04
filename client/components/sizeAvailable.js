import React, { Component } from 'react';

export default class Size extends Component {

  render() {
    const { size } = this.props;
    return (
      <div className="size-available">
        {size}
      </div>
    );
  }
}
