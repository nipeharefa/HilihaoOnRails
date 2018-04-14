import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./partials'),
  loading: () => (<div />),
});

const CongregationList = () => (<LoadableComponent />);

export default CongregationList;
