import test, { Page, Locator, expect, chromium, FrameLocator } from "@playwright/test";

export class BasePage {
    readonly page: Page;
    readonly SingleClick: Locator;
    readonly DoubleClick: Locator;
    readonly Hover: Locator;
    readonly ToolTip: Locator;
    readonly StaticDropdown: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly trackSelect: Locator;
    readonly rememberCheckbox: Locator;
    readonly modeApiRadio: Locator;
    readonly submitFormBtn: Locator;
    readonly LoadButton: Locator;
    readonly KeyboardInput: Locator;
    readonly ClickEnter: Locator;
    readonly VisibleInUI: Locator;
    readonly Hidden: Locator;
    readonly InnerText: Locator;
    readonly TextContent: Locator;
    readonly InputValue: Locator;
    readonly Attribute: Locator;
    readonly AllInnerTexts: Locator;
    readonly AllTextContents: Locator;
    readonly HtmlElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.SingleClick = page.getByTestId('single-click-btn');
        this.DoubleClick = page.getByTestId('double-click-btn');
        this.Hover = page.getByTestId('hover-btn');
        this.ToolTip = page.getByTestId('tooltip-trigger-btn');
        this.StaticDropdown = page.getByTestId('static-practice-select');;
        this.nameInput = page.getByTestId('name-input');
        this.emailInput = page.getByTestId('email-input');
        this.trackSelect = page.getByTestId('track-select');
        this.rememberCheckbox = page.getByTestId('remember-checkbox');
        this.modeApiRadio = page.getByTestId('mode-api-radio');
        this.submitFormBtn = page.getByTestId('submit-form-btn');
        this.LoadButton = page.getByTestId('async-load-btn');
        this.KeyboardInput = page.getByTestId('keyboard-input');
        this.ClickEnter = page.getByTestId('keyboard-input');
        this.VisibleInUI = page.getByTestId('extract-textcontent-target');
        this.Hidden = page.getByTestId('extract-inputvalue-target');
        this.InnerText = page.getByTestId('extract-inputvalue-target');
        this.TextContent = page.getByTestId('extract-inputvalue-target');
        this.InputValue = page.getByTestId('extract-inputvalue-target');
        this.Attribute = page.getByTestId('extract-attribute-target');
        this.AllInnerTexts = page.getByTestId('extract-list-item');
        this.AllTextContents = page.getByTestId('extract-list-item');
        this.HtmlElement = page.getByTestId('extract-list');
    }

    async Action1() {
        await this.SingleClick.click();
        await expect(this.page.getByTestId('single-click-status')).toContainText('Single click completed.');
        await this.DoubleClick.dblclick();
        await expect(this.page.getByText('Double click completed.')).toBeVisible();
        await this.Hover.hover();
        await expect(this.page.getByText('Hover triggered successfully.')).toBeVisible();
        await this.ToolTip.hover();
        await expect(this.page.getByTestId('hover-tooltip')).toContainText('Tooltip verified');
        await this.StaticDropdown.selectOption('Easy - Basic locator targeting');
    }

    async Action2(name: string, email: string, track: string) {
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.trackSelect.selectOption(track)
        await this.rememberCheckbox.check()
        await this.modeApiRadio.check()
        await this.submitFormBtn.click()
        await expect(this.page.getByText(`${name} submitted (${email}) for ${track}.`)).toBeVisible()
    }

    async Action3(value: string) {
        await this.LoadButton.click();
        await expect(this.page.getByText('Async result loaded successfully.')).toBeVisible({ timeout: 25000 });
        await this.KeyboardInput.fill(value);
        await this.KeyboardInput.press('Enter');
        await expect(this.page.getByText('Command submitted: Playwright')).toBeVisible();
    }

    async Action4() {
        const innerTextvalue = await this.VisibleInUI.innerText();
        console.log("innerTextvalue==>" + innerTextvalue);
        const textContentValue = await this.Hidden.textContent();
        console.log("textContentValue==>" + textContentValue);
        const inner = await this.InnerText.innerText();
        console.log("inner===>" + inner);
        const text = await this.TextContent.textContent();
        console.log("text===>" + text);
        const inputValue = await this.InputValue.inputValue();
        console.log("inputValue===>" + inputValue);
        const attributeValue = await this.Attribute.getAttribute('value');
        console.log("attributeValue===>" + attributeValue);
        const allInnerTexts = await this.AllInnerTexts.allInnerTexts();
        console.log("allInnerTexts===>" + allInnerTexts);
        const allTextContents = await this.AllTextContents.allTextContents();
        console.log("allTextContents===>" + allTextContents);
        const htmlElement = await this.HtmlElement.innerHTML();
        console.log("htmlElement===>" + htmlElement);
    }

    async Action5() {
        const stateCheck = await this.rememberCheckbox.isChecked();
        console.log("stateCheck===>" + stateCheck);
        if (stateCheck === false) {
            await this.rememberCheckbox.check();
        }
        const stateCheckAfterChecking = await this.rememberCheckbox.isChecked();
        console.log("stateCheckAfterChecking===>" + stateCheckAfterChecking);
    }

    async navigateTo() {
        await this.page.goto(process.env.BASE_URL!);
    }

}

export class AdvPage {
    readonly page: Page;
    readonly DynamicDropdownOption: Locator;
    readonly HiddenDropdownMenu: Locator;
    readonly HiddenDropdownPractice: Locator;
    readonly DynamicGroupGroup: Locator;
    readonly BootstrapDropdownPractice: Locator;
    readonly TriggerAlert: Locator;
    readonly TriggerConfirm: Locator;
    readonly TriggerPrompt: Locator;
    readonly OpenPopUp: Locator;
    readonly OpenPopUpTab: Locator;
    readonly DargCard: Locator;
    readonly DropTraget: Locator;
    readonly UploadFile: Locator;
    readonly UploadMultipleFile: Locator;
    readonly DownloadPDFButton: Locator;
    readonly IFrameArea: FrameLocator;
    readonly IFrameValue: Locator;
    readonly IFrameSubmit: Locator;
    readonly IFrameResult: Locator;
    readonly ShadowDOMArea: Locator;
    readonly ShadowDOMValue: Locator;
    readonly ShadowDOMSubmit: Locator;
    readonly ShadowDOMResult: Locator;
    readonly StartDate: Locator;
    readonly InterviewDate: Locator;
    readonly NavigationLink: Locator;
    readonly TriggerAPIResponse: Locator;
    readonly TestLoadState: Locator;
    readonly TestDOMContentLoadedState: Locator;
    readonly TestNetworkIdleState: Locator;
    readonly GetScreenshotOf: Locator

    constructor(page: Page) {
        this.page = page;
        this.DynamicDropdownOption = page.getByTestId('dynamic-option-select');
        this.HiddenDropdownMenu = page.getByTestId('hidden-dropdown-select');
        this.HiddenDropdownPractice = page.getByTestId('hidden-dropdown-toggle-btn');
        this.DynamicGroupGroup = page.getByTestId('dynamic-group-select');
        this.BootstrapDropdownPractice = page.getByTestId('bootstrap-dropdown-trigger');
        this.TriggerAlert = page.getByTestId('alert-btn');
        this.TriggerConfirm = page.getByTestId('confirm-btn');
        this.TriggerPrompt = page.getByTestId('prompt-btn');
        this.OpenPopUp = page.getByTestId('popup-link');
        this.OpenPopUpTab = page.getByTestId('popup-right-click-link');
        this.DargCard = page.getByTestId('drag-source');
        this.DropTraget = page.getByTestId('drop-target');
        this.UploadFile = page.getByTestId('file-upload-input');
        this.UploadMultipleFile = page.getByTestId('multi-file-upload-input');
        this.DownloadPDFButton = page.getByTestId('download-pdf-btn');
        this.IFrameArea = page.frameLocator('#practice-iframe');
        this.IFrameValue = this.IFrameArea.locator('#frame-input');
        this.IFrameSubmit = this.IFrameArea.locator('#frame-save');
        this.IFrameResult = this.IFrameArea.locator('#frame-result');
        this.ShadowDOMArea = page.getByTestId('shadow-host');
        this.ShadowDOMValue = this.ShadowDOMArea.locator('#shadow-input');
        this.ShadowDOMSubmit = this.ShadowDOMArea.locator('#shadow-save');
        this.ShadowDOMResult = this.ShadowDOMArea.locator('#shadow-result');
        this.StartDate = page.getByTestId('practice-date-picker');
        this.InterviewDate = page.getByTestId('interview-date-picker');
        this.NavigationLink = page.getByTestId('wait-navigation-link');
        this.TriggerAPIResponse = page.getByTestId('wait-response-btn');
        this.TestLoadState = page.getByTestId('wait-loadstate-practice-load-btn');
        this.TestDOMContentLoadedState = page.getByTestId('wait-loadstate-practice-dom-btn');
        this.TestNetworkIdleState = page.getByTestId('wait-loadstate-practice-networkidle-btn');
        this.GetScreenshotOf = page.locator('[alt="Playwright Mastery Academy"]');
    }

    async Option1(select: string) {
        test.setTimeout(180000)
        const disabledCheck = await this.DynamicDropdownOption.isDisabled();
        console.log("disabledCheck===>" + disabledCheck);

        const isVisiblebefore = await this.HiddenDropdownMenu.isVisible();
        console.log("isVisiblebefore===>" + isVisiblebefore);

        if (isVisiblebefore === false) {
            await this.HiddenDropdownPractice.click();
        }
        const isVisibleAfter = await this.HiddenDropdownMenu.isVisible();
        console.log("isVisibleAfter===>" + isVisibleAfter);

        await this.HiddenDropdownMenu.selectOption(select)
    }

    async Option2(Value1: string, Value2: string) {
        await this.DynamicGroupGroup.selectOption(Value1);
        await this.DynamicDropdownOption.selectOption(Value2);
        await expect(this.page.getByText('Dynamic dropdown selected: getByRole + name.')).toBeVisible();
        await this.BootstrapDropdownPractice.click();
        await expect(this.page.getByTestId('bootstrap-dropdown-menu')).toBeVisible();
        await this.page.getByText('Weekday Batch').click();
        await expect(this.page.getByText('Bootstrap dropdown selected: Weekday Batch.')).toBeVisible();
    }

    async Option3(text: string) {

        this.page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        })
        await this.TriggerAlert.click();

        this.page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        })
        await this.TriggerConfirm.click();
        await this.page.waitForTimeout(5000);
        await expect(this.page.getByText('Confirm dismissed.')).toBeVisible();

        this.page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept(text);
        })
        await this.TriggerPrompt.click();
        await expect(this.page.getByText('Prompt value: Playwright')).toBeVisible();
    }

    async Option4() {

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.OpenPopUp.click()
        ]);
        await newPage.waitForTimeout(5000);
        await expect(newPage.getByText('Popup Opened Successfully')).toBeVisible()
        await this.page.bringToFront();
        await this.page.waitForTimeout(5000);
        await expect(this.page.getByText('Drag and Drop + File Upload/Download')).toBeVisible();

    }

    async Option5() {
        await this.OpenPopUpTab.click();
        await expect(this.page.getByText('Direct click blocked. Use right click -> Open link in new tab.')).toBeVisible();
        await this.OpenPopUpTab.getAttribute('href')
        const nextPage = await this.page.context().newPage();
        await nextPage.goto('https://playwright-mastery-academy-app.vercel.app/practice/popup?source=right-click');
        await nextPage.waitForTimeout(5000);
        await expect(nextPage.getByText('Popup Opened Successfully')).toBeVisible();
        await this.page.bringToFront();
        await expect(this.page.getByText('Drag and Drop + File Upload/Download')).toBeVisible();
    }

    async Option6() {
        test.setTimeout(300000);
        await this.DargCard.dragTo(this.DropTraget);
        //await this.page.waitForTimeout(40000);
        await expect(this.page.getByText('Drop completed successfully.')).toBeVisible({ timeout: 50000 });
    }

    async Option7() {
        await this.UploadFile.setInputFiles('uploads/forUpload.txt');
        await expect(this.page.getByText('forUpload.txt uploaded successfully.')).toBeVisible();
        await this.UploadMultipleFile.setInputFiles(['uploads/forUpload.txt', 'uploads/forUpload_1.txt'])
        await expect(this.page.getByText('2 files uploaded: forUpload.txt, forUpload_1.txt')).toBeVisible()

    }

    async Option8() {
        const [DownloadFile] = await Promise.all([
            this.page.waitForEvent('download'),
            this.DownloadPDFButton.click()
        ]);
        const fileName = DownloadFile.suggestedFilename();
        await DownloadFile.saveAs(`downloads/${fileName}`);
        console.log(fileName);
        await expect(this.page.getByText(fileName)).toBeVisible()
        //await expect(this.page.getByText('practice-report.pdf download started.')).toBeVisible()
    }

    async Option9() {
        await this.IFrameValue.fill('Playwright');
        await this.IFrameSubmit.click();
        await expect(this.IFrameResult).toContainText('Playwright saved');
    }

    async Option10() {
        await this.ShadowDOMValue.fill('Playwright');
        await this.ShadowDOMSubmit.click();
        await expect(this.ShadowDOMResult).toContainText('Result: Playwright saved');

    }

    async Option11() {
        await this.StartDate.type('01-11-1995'); // input field format MM-DD-YYYY
        await expect(this.page.getByText('Practice Date Selected: 1995-01-11')).toBeVisible();
        //await this.StartDate.fill('01-11-1995');

        const datePicker = this.InterviewDate
        await datePicker.evaluate((dom, val) => { //Set date directly in DOM
            const html = dom as HTMLInputElement
            html.value = val as string
            html.dispatchEvent(new Event('input')) //value changed
            html.dispatchEvent(new Event('change'))
        }, "1995-01-11") //HTML date format YYYY-MM-DD
        await this.page.waitForTimeout(5000);
        await expect(this.page.getByText('Interview Date Selected: 1995-01-11')).toBeVisible();


    }

    async Option12() {
        test.setTimeout(300000);
        await this.NavigationLink.click();
        await this.page.waitForURL('https://playwright-mastery-academy-app.vercel.app/practice/popup?source=waitfornavigation')
        await expect(this.page.getByText('Popup Opened Successfully')).toBeVisible({ timeout: 50000 })

        await this.page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        await this.TriggerAPIResponse.click();
        await this.page.waitForTimeout(5000);
        await this.page.waitForResponse('https://playwright-mastery-academy-app.vercel.app/api/practice/waits-status')
        await expect(this.page.getByText('Trigger API Response Completed')).toBeVisible()

        await this.TestLoadState.click();
        await this.page.waitForLoadState('load');
          await this.page.waitForTimeout(5000);
        await expect(this.page.getByText('Test load State: Completed')).toBeVisible()

        await this.TestDOMContentLoadedState.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.getByText('Test DOMContentLoaded State: Completed')).toBeVisible({timeout: 50000})

        await this.TestNetworkIdleState.click();
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.getByText('Test Network Idle State: Completed')).toBeVisible({timeout: 50000})

    }

    async Option13() {
        await this.GetScreenshotOf.screenshot({ path: 'screenshots/element_1.png' });
        await this.page.screenshot({ path: 'screenshots/page_1.png', fullPage: true });
    }

   

    async navigateTo() {
        await this.page.goto(process.env.ADV_URL!)
    }
}




