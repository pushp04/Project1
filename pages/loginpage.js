exports.Loginpage =
class Loginpage {
    constructor(page){

        this.page = page;
        this.user = page.getByPlaceholder('User');
        this.pass = page.getByPlaceholder('Pass');
        this.loginbtn = page.getByRole('button', { name: 'Login' })
    }
    async navigateUrl(url){
        await this.page.goto(url);
    }

    async login(username, password)
    {
    await this.user.fill(username);
    await this.pass.fill(password);
    await this.loginbtn.click();
    }
    
}