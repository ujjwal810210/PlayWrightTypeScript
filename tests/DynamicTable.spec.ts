import {test,expect} from '@playwright/test'

test('verify dynamic table content', async({page})=>{
    await page.goto('https://www.booking.com/');
    await page.locator("//span[@data-testid='date-display-field-start']").click();
    const augusttablecontentAll = await page.locator("//h3[@id='bui-calendar-month-2026-7']/../table/tbody/tr/td").all( );
    for(const content of augusttablecontentAll){
        const text = await content.allInnerTexts();
        console.log(text);
        if(text.includes('15')){
            await content.click();
            break;
        }
    //const tarhgetDate = await augusttablecontentAll.filter({hasText: '15'}).click();
    
       
    
    
    }
});