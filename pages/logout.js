exports.Logoutpage =
class Logoutpage {
    constructor(page){

        this.page = page;
        this.profilebtn = '//span[@class="oxd-userdropdown-tab"]';
        this.logoutbtn = '//ul[@role="menu"]/li[4]'
    }

    async logoutaction()
    {
    await this.page.locator(this.profilebtn).click();
    await this.page.click(this.logoutbtn);
    }
    
}