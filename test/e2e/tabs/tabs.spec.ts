import { test, expect } from '@playwright/test';
import { TabsPage } from './tabsPage';

test('Tabs', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.goto();
  await expect(tabsPage.container).toHaveScreenshot('tabs.png');

  await tabsPage.tabHeaders.last().hover();
  await expect(tabsPage.container).toHaveScreenshot('tabs-hover.png');

  await tabsPage.tabHeaders.last().click();
  await expect(tabsPage.container).toHaveScreenshot('tabs-changed.png');
});

test('Tabs - fitted', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.goto('args=fitted:true');

  await expect(tabsPage.container).toHaveScreenshot('tabs-fitted.png');
});
