exports.Homepage =
class Homepage {
    constructor(page){

        this.page = page;
        this.admin = '//ul[@class="oxd-main-menu"]/li[1]';
        this.claim = '//ul[@class="oxd-main-menu"]/li[2]';
        this.pim = '//ul[@class="oxd-main-menu"]/li[11]';
        }

    async back(){
        this.page.goBack();
    }
    async adminclick()
    {
    await this.page.click(this.admin);
    }

    async pimclick()
    {
    await this.page.click(this.pim);
    }
    
    async claimclick()
    {
    await this.page.click(this.claim);
    }
}