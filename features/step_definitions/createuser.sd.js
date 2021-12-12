// noinspection NpmUsedModulesInstalled
const { When, Then, Given } = require('@cucumber/cucumber');
const YAML = require('yaml');

When(/^I go to "([^"]*)"$/, async function (url) {
    await browser.url(url);
});

When('I login as: {string}, {string}',async function (login, password) {
    login = 'walker@jw.com';
    password = 'password';
    await $('#login').setValue(login);
    await $('#password').setValue(password);     
    await $('button').click();   
});

When('I go to {string} menu item',async function (item) {    
    await $(`=${item}`).click();
});

When(/^I fill form and check table:$/,async function (formYaml) {
    const formData = YAML.parse(formYaml);
    console.log( {formData} );
    await $('#email').setValue(formData.email);
    await $('#password').setValue(formData.password);
    await $('#address1').setValue(formData.Address);
    await $('#address2').setValue(formData.Address2);
    await $('#city').setValue(formData.City);
    await $('#zip').setValue(formData.Zip);
    await $('#description').setValue(formData.Description);    
    await $('#dashboard > div > div > div > form > button').click();

    const emailFromTable = await $('//*[@id="users-table"]/div[2]/div/div/div[1]').getText();
    const adr1FromTable = await $('//*[@id="users-table"]/div[2]/div/div/div[3]').getText();
    const adr2FromTable = await $('//*[@id="users-table"]/div[2]/div/div/div[4]').getText();
    const cityFromTable = await $('//*[@id="users-table"]/div[2]/div/div/div[5]').getText();
    const zipFromTable = await $('//*[@id="users-table"]/div[2]/div/div/div[7]').getText();
    const descFromTable = await $('//*[@id="users-table"]/div[2]/div/div/div[8]').getText();    
    expect(formData.email).toEqual(emailFromTable);
    expect(formData.Address).toEqual(adr1FromTable);
    expect(formData.Address2).toEqual(adr2FromTable);
    expect(formData.City).toEqual(cityFromTable);
    expect(formData.Zip).toEqual(Number(zipFromTable));
    expect(formData.Description).toEqual(descFromTable);
});







