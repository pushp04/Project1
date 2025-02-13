exports.Claimpage =
class Claimpage {
    constructor(page){

        this.page = page;
        this.details = '//div[@role="rowgroup"][2]/div[1]/div/div[9]';
        this.approve = '//div[@class="orangehrm-action-buttons-container"]/button[3]';
        this.reject = '//div[@class="orangehrm-action-buttons-container"]/button[2]';
        this.backbt = '(//*[@type="button"])[4]';
    }
    async backbtn(){
        this.page.click(this.backbt);
    }
    async claimDetails()
    {
    await this.page.click(this.details);
    }

    async approvebtn()
    {
    await this.page.click(this.approve);
    }
    
    async rejectbtn()
    {
    await this.page.click(this.reject);
    }

}