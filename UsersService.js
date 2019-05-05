class UsersService {
  constructor() {
    this.users = [];
  }

  // zwrócenie tablicy użytkowników
  getAllUsers() {
    return this.users;
  }

  // odszukanie użytkownika po wskazanym id
  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }

  // dodanie kolejnego użytkownika do listy
  addUser(user) {
    this.users = [user, ...this.users];
  }

  // usuwanie wskazanego przez nas użytkownika
  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}

module.exports = UsersService;