import assert from 'node:assert/strict';

// Run with PLAYWRIGHT_MODULE pointing to an installed Playwright ESM entrypoint.
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({
  ...(process.env.BROWSER_PATH ? { executablePath: process.env.BROWSER_PATH } : {}),
  headless: true,
  args: ['--no-sandbox'],
});
const baseURL = process.env.TEST_URL || 'http://127.0.0.1:5174';
try {
  for (const reducedMotion of ['no-preference', 'reduce']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    let responseStatus = 500;
    let requests = 0;
    let submittedBudget = '';
    await page.route('https://api.emailjs.com/**', async route => {
      requests++;
      const body = route.request().postData() || '';
      assert.ok(body.includes(submittedBudget), 'Selected budget must remain in submission after closing its panel');
      await new Promise(resolve => setTimeout(resolve, 500));
      await route.fulfill({ status: responseStatus, contentType: 'text/plain', body: responseStatus === 200 ? 'OK' : 'Simulated error' });
    });
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const trigger = page.locator('#service-trigger-web');
    const panel = page.locator('#service-panel-web');
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await trigger.click();
      await page.waitForFunction(() => document.querySelector('#service-panel-web > div')?.style.height === 'auto');
      assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
      assert.equal(await panel.evaluate(node => node.inert), false);
      assert.ok((await panel.boundingBox()).height > 100);
      await trigger.click();
      assert.equal(await panel.evaluate(node => node.inert), true);
      await page.waitForFunction(() => document.querySelector('#service-panel-web').children.length === 0);
      const question = page.locator('#faq-trigger-0');
      await question.scrollIntoViewIfNeeded();
      await question.focus();
      await page.keyboard.press('Enter');
      await page.waitForFunction(() => document.querySelector('#faq-panel-0 > div')?.style.height === 'auto');
      assert.equal(await question.getAttribute('aria-expanded'), 'true');
      assert.equal(await page.locator('#faq-panel-0').evaluate(node => node.inert), false);
      await page.keyboard.press('Space');
      await page.waitForFunction(() => document.querySelector('#faq-panel-0').children.length === 0);
      assert.equal(await question.getAttribute('aria-expanded'), 'false');
      assert.equal(await question.evaluate(node => getComputedStyle(node).outlineStyle), 'solid');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      console.log(`${reducedMotion}: services/layout ${width}px OK`);
    }
    // Interrupt an opening and closing before either has completed.
    for (let i = 0; i < 3; i++) {
      await trigger.dispatchEvent('click');
      await page.waitForTimeout(35);
    }
    await page.waitForFunction(() => document.querySelector('#service-panel-web > div')?.style.height === 'auto');
    assert.equal(await panel.evaluate(node => node.inert), false);
    await panel.locator('a').click();
    await page.waitForFunction(() => document.querySelector('#contact-service').value !== '');
    assert.notEqual(await page.locator('#contact-service').inputValue(), '');
    await page.waitForFunction(() => document.activeElement.id === 'contact-service');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'contact-service');
    await trigger.click();
    await page.waitForFunction(() => document.querySelector('#service-panel-web').children.length === 0);

    await page.evaluate(() => window.scrollTo(0, 0));
    const menu = page.locator('.menu-toggle');
    await menu.click();
    await page.waitForFunction(() => document.querySelector('#mobile-menu > div')?.style.height === 'auto');
    await page.locator('.mobile-menu a').first().focus();
    await page.keyboard.press('Escape');
    assert.equal(await page.evaluate(() => document.activeElement.classList.contains('menu-toggle')), true);
    assert.equal(await page.locator('#mobile-menu').evaluate(node => node.inert), true);
    await page.waitForFunction(() => document.querySelector('#mobile-menu').children.length === 0);
    await menu.click();
    await page.locator('.mobile-menu a').first().click();
    assert.equal(await page.evaluate(() => document.activeElement.id), 'servicos');
    await page.waitForFunction(() => document.querySelector('#mobile-menu').children.length === 0);
    await menu.click();
    await page.waitForFunction(() => document.querySelector('#mobile-menu > div')?.style.height === 'auto');
    await page.locator('.mobile-menu a').first().focus();
    assert.equal(await page.evaluate(() => document.activeElement.closest('.mobile-menu') !== null), true);
    await page.setViewportSize({ width: 1024, height: 1000 });
    await page.waitForFunction(() => document.querySelector('#mobile-menu').children.length === 0);
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('href')), '#hero');

    // FAQ allows several answers, preserving the previous native-details behavior.
    await page.locator('#faq-trigger-0').click();
    await page.locator('#faq-trigger-1').click();
    assert.equal(await page.locator('.faq-trigger[aria-expanded="true"]').count(), 2);
    await page.locator('#faq-trigger-0').click();
    await page.locator('#faq-trigger-1').click();

    await page.locator('#budget-trigger').click();
    await page.waitForFunction(() => document.querySelector('#budget-panel > div')?.style.height === 'auto');
    submittedBudget = await page.locator('#contact-budget option').nth(1).textContent();
    await page.locator('#contact-budget').selectOption({ label: submittedBudget });
    await page.locator('#budget-trigger').click();
    await page.waitForFunction(() => document.querySelector('#budget-panel').children.length === 0);
    await page.locator('#budget-trigger').click();
    assert.equal(await page.locator('#contact-budget').inputValue(), submittedBudget);
    await page.locator('#budget-trigger').click();
    await page.waitForFunction(() => document.querySelector('#budget-panel').children.length === 0);

    await page.locator('#contact-name').fill('Teste automatizado');
    await page.locator('#contact-email').fill('teste@example.com');
    await page.locator('#contact-message').fill('Mensagem simulada, sem envio real.');
    await page.locator('.form-submit').click();
    await page.waitForFunction(() => document.querySelector('.form-submit')?.disabled);
    assert.equal(await page.locator('.form-submit').isDisabled(), true);
    if (reducedMotion === 'reduce') {
      assert.equal(await page.locator('.submit-spinner').evaluate(node => getComputedStyle(node).animationName), 'none');
    }
    await page.locator('.form-error').waitFor();
    assert.equal(await page.locator('#contact-name').inputValue(), 'Teste automatizado');
    responseStatus = 200;
    await page.locator('.form-submit').click();
    await page.locator('.form-success').waitFor();
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Conversa iniciada.');
    await page.getByRole('button', { name: 'Enviar outra mensagem' }).click();
    assert.equal(await page.evaluate(() => document.activeElement.id), 'contact-name');
    assert.equal(await page.locator('input[name="budget"]').inputValue(), '');
    assert.equal(requests, 2);
    assert.deepEqual(errors, []);
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const selector of ['.about-heading', '.process-steps', '.faq-list', '.contact-copy', '.site-footer']) {
        await page.locator(selector).scrollIntoViewIfNeeded();
        if (selector === '.about-heading' || selector === '.contact-copy') {
          await page.waitForFunction(selector => getComputedStyle(document.querySelector(selector)).opacity === '1', selector);
        }
        if (reducedMotion === 'no-preference' && width !== 320) {
          await page.locator(selector).screenshot({ path: `/tmp/artic-full-${width}-${selector.slice(1)}.png` });
        }
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      }
      assert.ok((await page.locator('.back-to-top').boundingBox()).height >= 44);
      await page.locator('.back-to-top').click();
      await page.waitForFunction(() => document.activeElement.id === 'hero-title');
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `/tmp/artic-motion-${reducedMotion}.png` });
    console.log(`${reducedMotion}: rapid toggles, menu, focus and simulated form OK`);
    await page.close();
  }
} finally {
  await browser.close();
}
