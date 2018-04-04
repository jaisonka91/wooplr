import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../redux/actions.js';
import { bindActionCreators } from 'redux';
import DataWrap from '../wrapData';

const mapStateToProps = (state) =>{
  return {
    data: state.apiData.data,
    loading: state.apiData.loading,
    total: state.apiData.total,
    error: state.apiData.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ search }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DataWrap);
