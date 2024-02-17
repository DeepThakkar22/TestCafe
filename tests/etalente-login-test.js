import { Selector } from 'testcafe';

fixture('Testcafe Framework Test for eTalente Login')
    .page('https://etalente.co.za');

test('Login Failed Test', async t => {
    await t
        .click(Selector('.mat-flat-button').withText('Log In'))       
        .typeText(Selector('.mat-form-field').withText('Username/E-Mail'), 'deep.thakkar22@gmail.com')
        .typeText(Selector('.mat-form-field').withText('Password'), 'Deep')       
        .click(Selector('button').withText('Login'))
        .expect(Selector('.et-fs-12').innerText).eql('Invalid credentials provided') 
        .takeScreenshot({
            path: 'eTalente-Login-Failed-Test-Fixture/Login-Failed.png',
            fullPage: true,
        });
});

test('Login Successful Test', async t => {
    await t
        .click(Selector('.mat-flat-button').withText('Log In'))
        .typeText(Selector('.mat-form-field').withText('Username/E-Mail'), 'deep.thakkar22@gmail.com')
        .typeText(Selector('.mat-form-field').withText('Password'), 'Loginid@01')
        .click(Selector('button').withText('Login'))
        .navigateTo('https://etalente.co.za/talent/job-list')
        .takeScreenshot({
            path: 'eTalente-Login-Success-Test-Fixture/Login-Success.png',
            fullPage: true,
        });
});