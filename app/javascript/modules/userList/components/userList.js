import React, { Component } from 'react';
import { Link } from 'react-router';
import UI_MESSAGES from '../../../constants/ui-messages';
import CONSTANTS from '../../../constants/app-constant';
import UI from '../../../mixins/ui';
import UsersService from '../../../services/user-service';
import UserTemplate from './userTemplate';
import TableHeader from '../../../commons/tableHeader';
import Alert from '../../../commons/alert';
import CustomLoader from '../../../commons/loader';
import $ from 'jquery';
import _ from 'underscore';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], showSince: 1, pageNumber: 1, loaded: false };
        this.showUsers = this.showUsers.bind(this);
    }

    componentDidMount() {
        this.getUsersList();
        $(document).on('scroll', this.showMoreVisible.bind(this));
    }

    componentWillUnmount() {
        $(document).off('scroll');
    }

    showMoreVisible() {
        if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
            this.state.pageNumber++;
            this.getUsersList(this.state.showSince);
        }
    }

    getUsersList(showSince) {
        UsersService.getUsers(showSince, this.state.pageNumber)
            .then((result) => {
                this.setState({
                    users: _.union(this.state.users, result),
                    showSince: this.getUpdatedlastUserId(result),
                    loaded: true
                });
            })
            .catch((error) => UI.notify('error', UI_MESSAGES.users.error.fetch));
    }

    getUpdatedlastUserId(result) {
        return result && result.length &&
            _.last(result) && _.last(result).id;
    }

    showUsers() {
        return this.state.users.length ?
            this.state.users.map((user, key) => {
                return (<UserTemplate key={key} user={user} />);
            }) :
            (<tr>
                <td>Loading...</td>
            </tr>);
    }

    render() {
        return (
            <div className="mainWrapper">
                <h2>GitHub Users</h2>
                <table className="table table-striped table-bordered">
                    <TableHeader headers={CONSTANTS.TABLE_HEADERS} />
                    <tbody>
                        {this.showUsers()}
                        <CustomLoader />
                    </tbody>
                </table>
            </div>
        );
    }
};
