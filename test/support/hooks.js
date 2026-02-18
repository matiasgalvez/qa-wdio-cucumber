const { Before, After } = require('@wdio/cucumber-framework');
const allure = require('@wdio/allure-reporter').default;

Before(async () => {
    await browser.maximizeWindow();
});

After(async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        const screenshot = await browser.takeScreenshot();

        allure.addAttachment(
            `Failure Screenshot - ${scenario.pickle.name}`,
            Buffer.from(screenshot, 'base64'),
            'image/png'
        );
    }
});
