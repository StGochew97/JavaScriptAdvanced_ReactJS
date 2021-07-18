function User(userName) {
    this.userName = userName;
}
User.prototype.greet = function () {
    console.log(`Hi, I'm ${this.userName}`);
}
const pesho = new User('Peter');
pesho.greet();
setTimeout(pesho.greet.bind(pesho), 2000);