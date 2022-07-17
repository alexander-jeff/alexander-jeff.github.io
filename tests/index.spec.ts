import { test, expect } from '@playwright/test';

test('Visiting index page', async ({ page }) => {
	// Go to http://localhost:3000/
	await page.goto('http://localhost:3000/');

	expect(page).toHaveTitle('Jeff Alexander');

	// Go to http://localhost:3000/
	await page.goto('http://localhost:3000/');

	expect(page).toHaveTitle('Jeff Alexander');

	// Click text=Hi! I'm Jeff.
	await page.locator("text=Hi! I'm Jeff.").click();
});
