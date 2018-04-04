import React, { Component } from 'react';
import SizeComponent from './sizeAvailable';
import ImgComponent from './imgComponent';
import PriceComponent from './priceComponent';

export default class Data extends Component {

  render() {
    const { data } = this.props;
    if(data && data.ecommerceProductJAXB){
      const {image_pid, webLink, name, salesPrice, retailPrice, description, availableSizes, stock, color, gender, category, subCategory} = data.ecommerceProductJAXB;
      return (
        <a href={`https://www.wooplr.com/${webLink}`} target="_blank" style={{textDecoration: 'none'}}>
          <div className="inner-box">
            {
              image_pid &&
                <ImgComponent image={image_pid} />
            }
            {
              name &&
                <div className="box-name">{name}</div>
            }
            {
              description &&
              <div className="box-description">{description}</div>
            }
            {
              salesPrice && retailPrice &&
                <PriceComponent salesPrice={salesPrice} retailPrice={retailPrice} />
            }
            {
              availableSizes && <div className="size-wraper">
                <span>Size : </span>
                {availableSizes.split(",").map((item, index)=>{
                  return <SizeComponent size={item} key={index}/>
                })}
              </div>
            }
            {
              stock &&
                <div className="box-stock">{`Only ${stock} piece available`}</div>
            }
            {
              color &&
                <div className="box-stock">{`Color: ${color}`}</div>
            }
            {/* {
              gender &&
                <div className="box-description">{gender}</div>
            }
            {
              category &&
                <div className="box-description">{category}</div>
            }
            {
              subCategory &&
                <div className="box-description">{subCategory}</div>
            } */}
          </div>
        </a>
      );
    }else{
      return <div />
    }
  }
}
