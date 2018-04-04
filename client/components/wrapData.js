import React, { Component } from 'react';
import DataComponent from './dataComponent';
import InfiniteScroll from 'react-infinite-scroller';

export default class DataWrap extends Component {

  constructor(){
    super()
    this.state = {
      page: 1,
      count: 8
    }
  }

  componentDidMount(){
    this.getData();
  }

  pageLoad = () => {
    this.setState((state, props)=>{
      return {page: state.page+1, count: state.page*8}
    });
    this.getData();
  }

  getData = () => {
    const { page, count } = this.state;
    this.props.search(page, count);
  }

  render() {
    let { data, loading, total, error } = this.props;
    return (
      <div className="container">
        <div className="text-center">
          <h2> Products </h2>
        </div>
        <div className="container text-center">
          {data.length == 0 && <span> Loading please wait... </span>}
          {error && <span> Network error please try again later... </span>}
          {data.length > 0 && !error && data &&
            <InfiniteScroll
                pageStart={this.state.page}
                loadMore={this.pageLoad}
                hasMore={loading?false:true}
                initialLoad={false}
                threshold={500}
                loader={<div className="loader">Loading please wait...</div>}
            >
              <div className="flex" key={this.state.page}>
                {data.map((item)=>{
                  return <DataComponent data={item} key={item.id}/>
                })}
              </div>
            </InfiniteScroll>
          }
        </div>
      </div>
    );
  }
}
