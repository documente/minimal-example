import { expect, test } from '@playwright/test';
import { PlaywrightRunner } from '@documente/documente';

const selectorTree = `
title: h1
More information link: a[href="https://www.iana.org/domains/example"]

`;

const env = '';

const testRunner = new PlaywrightRunner(selectorTree, {}, env);


test('spec #1', async ({ page }) => {
  await testRunner.run(`
When I visit "https://example.com"
then title should be visible
and it should contain text "Example Domain"
`, page, expect);
});

test('spec #2', async ({ page }) => {
  await testRunner.run(`
Given I visit "https://example.com"
when I click on More information link
then title should not exist
`, page, expect);
});

