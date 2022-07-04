import { test, expect } from '@playwright/test';

test('Visiting index page', async ({ page }) => {
	// Go to http://localhost:3000/
	await page.goto('http://localhost:3000/');

	expect(page).toHaveTitle('Jeff Alexander');

	// Find the main header
	const mainHeader = page.locator('.main-header');
	await expect(mainHeader).toBeVisible();
	expect(mainHeader).toContainText("Hi! I'm Jeff");

	// Find the intro text
	const introText = page.locator('data-testid=index-intro-text');
	await expect(introText).toBeVisible();
	expect(introText).toContainText(
		`I'm learning how to build static sites ` + `with Svelte, using Playwright tests for TDD.`
	);

	// Click text=Home
	await page.locator('text=Home').click();
	await expect(page).toHaveURL('http://localhost:3000/');
});
