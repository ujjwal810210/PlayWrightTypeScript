import {test,expect  } from '@playwright/test';

const logindata = [

    {username:'ujjwal'},
    {username:'kumar'},
    {username:'test'},
];

for(const nam of logindata){
    test(`verify username fill ${nam.username}`, async({page}) =>{
      await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle('Facebook');
    await page.locator("//input[@name='email']").fill(nam.username);

    });
}

test('handling multiple windows', async({page}) =>{
    const [newTab] = await Promise.all ([
        page.waitForEvent('popup'),
        page.lo
        

    ])

    

});