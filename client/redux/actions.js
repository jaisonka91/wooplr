import axios from 'axios';

export const SEARCH_DATA_DONE = 'SEARCH_DATA_DONE';
export const SEARCH_DATA_LOADING = 'SEARCH_DATA_LOADING';
export const SEARCH_DATA_FAILED = 'SEARCH_DATA_FAILED';

export function search(page, count) {
  return dispatch =>{
    dispatch({ type: SEARCH_DATA_LOADING, payload: {}});
    let result = {};
    axios.post('https://www.wooplr.com/rest/v2/advancedlookup/productsnew/top?pageNumber='+page+'&count='+count+'&fromCache=true',{
      "newFilters": [],
      "sort_by": ["relevance"]
    })
    .then((res) =>{
      if(res && res.data){
        result = res.data;
        dispatch({ type: SEARCH_DATA_DONE, payload: {
          data: result,
          total: result.length
        }});
      }else{
        dispatch({ type: SEARCH_DATA_FAILED, payload: {}});
      }
    }).catch((err)=>{
      dispatch({ type: SEARCH_DATA_FAILED, payload: {}});
    });
  }
}
