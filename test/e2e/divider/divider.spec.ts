import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-divider--interactive');

test.describe('Badge - standard size', () => {
  test('default', async ({ page }) => {
    const dividerPage = getPage(page);
    await dividerPage.goto();
    await expect(dividerPage.container).toHaveScreenshot('divider.png');
  });
});
