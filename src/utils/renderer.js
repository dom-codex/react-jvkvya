import React from 'react';
import SearchIllustration from '../components/searchillustration.js';
import ElectionSearchItem from '../components/electionsearchitem.js';
import Loader from "../components/loader.js"
const renderSearchComponentItem = (state, dispatch) => {
  if (!state.searchingElection && !state.foundElection && state.searchedElection==null) {
    return <SearchIllustration />;
  } else if (!state.searching && state.searchedElection!=null&&state.foundElection) {
    return <ElectionSearchItem />;
  } else if(state.searchingElection) {
    return <Loader/>
  }
};
export {renderSearchComponentItem}