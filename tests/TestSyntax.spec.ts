import {test,expect} from '@playwright/test';


test('verify syntax ', async({page}) =>{
    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle('Facebook');
    await page.close();

});

const logindata = [

    {username:'ujjwal'},
    {username:'kumar'},
    {username:'test1'},
];

for(const nam of logindata){
    test(`verify username fill ${nam.username}`, async({page}) =>{
      await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle('Facebook');
    await page.locator("//input[@name='email']").fill(nam.username);

    });
}


test('verfy download',async({page})=>{

    const [download]= await Promise.all([
        page.waitForEvent('download'),
        page.locator("//a[@class='download-link']").click()
    ]);
    await download.saveAs('c:/desktop/downloadedfile.pdf');
    
    
    
});

test('verify multiple download',async({page})=>{

    const [download]= await Promise.all([
        page.waitForEvent('download'),
        page.locator("//a[@class='download-link']").click()
    ]);
    await download.saveAs('c:/desktop/downloadedfile.pdf');
    
    
    
});

test('verify multiple download',async({page})=>{
page.on('dialog', async(dialog)=>{
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
});
