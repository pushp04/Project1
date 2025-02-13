const { test, expect } = require('@playwright/test');
import { Claimpage } from '../pages/claimpage';
import { Homepage } from '../pages/Homepage';
import { Loginpage } from '../pages/loginpage'; 
import { Logoutpage } from '../pages/logout';


test.beforeEach('login',async({page}) => {
  const loginpage =new Loginpage(page);
  const url ='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  await loginpage.navigateUrl(url);
  await loginpage.login('Admin','admin123');

})

test('End to end test ', async ({ page }) => {

  const homepage = new Homepage(page);

  await homepage.adminclick();
  await homepage.back();

  
  await homepage.pimclick();
  await homepage.back();

  await homepage.claimclick();
  // await homepage.back();

  const claimpage =new Claimpage(page);
  claimpage.claimDetails();
  claimpage.backbtn();


  const logoutpage =new Logoutpage(page);
  await logoutpage.logoutaction();

});

test('login test ', async ({ page }) => {

  //my login test
});

test('logout test ', async ({ page }) => {
  // const loginpage =new Loginpage(page);
  // await loginpage.navigateUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  // await loginpage.login('Admin','admin123');
  
  const logoutpage =new Logoutpage(page);
  await logoutpage.logoutaction();
});