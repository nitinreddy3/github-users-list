import http from '../mixins/restutils';

const GIT_BASE_URL = 'https://api.github.com/';

const API = {
  users: 'users'
};

const PER_PAGE_DATA = 20;

const UsersService = {
  getUsers: (showSince, pageNumber) => {
    return http.requestData(GIT_BASE_URL + API.users,
      { since: showSince, page: pageNumber, per_page: PER_PAGE_DATA},
      http.requestType.get)
  },
  
  getPerPageRecordCount: () => PER_PAGE_DATA
};

export default UsersService;
