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
    
    this.state.email = formData.email;    
    this.state.Address = formData.Address;
    this.state.Address2 = formData.Address2;
    this.state.City = formData.City;
    this.state.Zip = formData.Zip;
    this.state.Description = formData.Description;    
});

Then("I check table", async function () {
    const emailFromTable = await $('//*[@id="users-table"]/div[2]/div/div[2]/div[1]').getText();
    const adr1FromTable = await $('//*[@id="users-table"]/div[2]/div/div[2]/div[3]').getText();
    const adr2FromTable = await $('//*[@id="users-table"]/div[2]/div/div[2]/div[4]').getText();
    const cityFromTable = await $('//*[@id="users-table"]/div[2]/div/div[2]/div[5]').getText();
    const zipFromTable = await $('//*[@id="users-table"]/div[2]/div/div[2]/div[7]').getText();
    const descFromTable = await $('//*[@id="users-table"]/div[2]/div/div[2]/div[8]').getText();
    
    expect(this.state.email).toEqual(emailFromTable);
    expect(this.state.Address).toEqual(adr1FromTable);
    expect(this.state.Address2).toEqual(adr2FromTable);
    expect(this.state.City).toEqual(cityFromTable);
    expect(this.state.Zip).toEqual(Number(zipFromTable));
    expect(this.state.Description).toEqual(descFromTable);
});







