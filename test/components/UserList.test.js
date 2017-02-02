import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import UserList from 'UserList';
import Constants from '../../app/javascript/constants/app-constant.js';

describe('UserList', () => {
    it('renders without crashing', () => {
       mount(<UserList/>);
    });

    describe('getUpdatedlastUserId', () => {
        it('should return userId of last user in the array', () => {
            const userList = mount(<UserList/>);
            let users = Constants.GIT_USERS;
            let expected = 30;
            let actual = userList.instance().getUpdatedlastUserId(users);
            expect(actual).toBe(expected);
        });
    });
});