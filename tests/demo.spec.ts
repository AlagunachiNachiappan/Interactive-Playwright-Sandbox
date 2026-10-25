import { test, expect, chromium } from '@playwright/test'
import { AdvPage, BasePage } from '../pages/demo.page';


test.describe('Interactive Playwright Sandbox Basic', () => {
    let basepage: BasePage;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        await basepage.navigateTo();
    })

    test('Click, Double Click, Hover, Tooltip, Static Dropdown', async () => {
        await basepage.Action1();
    })

    test('Inputs, Checkbox, Radio, Dropdown', async () => {
        await basepage.Action2('John Doe', 'john@gamail.com', 'Playwright Core');
    })

    test('Dynamic Waits, Keyboard', async () => {
        await basepage.Action3('Playwright Core');
    })

    test('Text and Attribute Extraction', async () => {
        await basepage.Action4();
    })

    test('element state checks - checked', async () => {
        await basepage.Action5();
    })
})

test.describe('Interactive Playwright Sandbox Advance', () => {
    let advpage: AdvPage;
    test.beforeEach(async ({ page }) => {
        advpage = new AdvPage(page)
        await advpage.navigateTo();
    })

    test('verify the dropdown is disabled', async () => {
        await advpage.Option1("Hidden - Advanced");
    })

    test('Dynamic Dropdown, Hidden Dropdown and Bootstrap Dropdown', async () => {
        await advpage.Option2('Locators', 'getByRole + name');
    })

    test('handle alert dialog', async () => {
        await advpage.Option3('Playwright');
    })

    test('Handle new tab', async () => {
        await advpage.Option4();
    })

    test('Handle new tab direct link blocked', async () => {
        await advpage.Option5();
    })

    test('Handling Drag and Drop ', async () => {
        await advpage.Option6();
    })

    test('Handling File Upload ', async () => {
        await advpage.Option7();
    })

    test('Handling File Download ', async () => {
        await advpage.Option8();
    })

    test('Handling Iframe', async () => {
        await advpage.Option9();
    })

    test('Handling shadow DOM', async () => {
        await advpage.Option10();
    })

    test('Practice and Interview Dates', async ({ page }) => {
        await advpage.Option11();
    })

    test('wait commands', async ({ page }) => {
        await advpage.Option12();
    })

    test('element screenshot and page screenhot', async ({ page }) => {
        await advpage.Option13();
    })
})

