import React from 'react';
import ReactDOM from 'react-dom';
import UserList from 'UserList';

describe('UserList', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserList/>, div);
    });
});