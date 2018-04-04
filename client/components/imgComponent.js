import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

export default class Image extends Component {

  constructor(){
    super()
    this.state = {
      current: 0
    }
  }

  mouseOver = (images) => {
    return()=>{
      if(images.length-1 > this.state.current){
        this.setState((state, props)=>{
          return {current: state.current+1}
        });
      }else{
        this.setState((state, props)=>{
          return {current: 0}
        });
      }
    }
  }


  render() {
    const { image } = this.props;
    const { current } = this.state;
    return (
      <div className="image-component">
        <LazyLoad offsetTop={200}>
          <img className="image-style" src={`https://res.wooplr.com/image/upload/f_auto,q_auto,fl_lossy,w_400,c_fill,ar_3:4/${image[current]}`} alt={image[current]} onMouseOver={this.mouseOver(image)}/>
        </LazyLoad>
      </div>
    );
  }
}
