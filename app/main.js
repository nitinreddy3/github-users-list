require('./theme/stylesheets/all.sass');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserList from './javascript/modules/userList/components/userList';

const RootTemplate = React.createClass({
    render() {
        return ( < div className = 'contain-fluid' >
            <
            UserList / >
            <
            /div>
        );
    },
});

ReactDOM.render( < RootTemplate / > , document.getElementById('app'));