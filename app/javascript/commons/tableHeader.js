import React from 'react';

export default class TableHeader extends React.Component {
  render() {
    return (<thead>
	    <tr>
	      {	this.props.headers.map((header, key) => {
        return (<th key={key}>{header}</th>);
      })}
	    </tr>
	  </thead>);
  }
}