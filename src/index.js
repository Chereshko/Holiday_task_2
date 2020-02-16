import UserListLoader from './components/userListLoader'

const container = document.getElementById('team');

const userListLoader = new UserListLoader(container, './data/employees.json');
console.log(userListLoader);

