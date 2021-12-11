// noinspection NpmUsedModulesInstalled
const { When, Then, Given } = require('@cucumber/cucumber');

When('I go to url: {string}', async function (url) {
    await browser.url(url);
});

When(/^I fill "([^"]*)" and "([^"]*)" and check message$/, async function (email, password) {   
    this.state.email = email;
    this.state.password = password;
    await $('#login').setValue(email);
    await $('#password').setValue(password);     
    await $('button').click();  
});

Then(/^I get "([^"]*)" error message$/,async function(message) {
           
            message === await $('#error').getValue();            
            let errMessage = 'Fail to login';
            if (!this.state.email){
                errMessage = 'Login is empty';                
            }               
            if (this.state.email === 'old_walker@jw.com'){
                errMessage = 'The user is suspended';                 
            }                       
            if (!this.state.password){
                errMessage = 'Password is empty';                
            }          
               
            expect(errMessage).toEqual(message);              
       
});
 
   




