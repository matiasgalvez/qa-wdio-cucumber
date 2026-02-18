const Page = require('./page');

class LoginPage extends Page {

    get username() {
        return $('#user-name');
    }

    get password() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }

    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
