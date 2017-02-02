import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (<div className="loaderOverlay" style={{display: "none"}}>
      <div className="customLoader">Loading...</div>
    </div>);
  }
}