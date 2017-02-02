import React from 'react';

export default class Loader extends React.Component {
    render() {
        return (<tr className="loaderOverlay" style={{ display: "none" }}>
            <td className="customLoader">Loading...</td>
        </tr>);
    }
}