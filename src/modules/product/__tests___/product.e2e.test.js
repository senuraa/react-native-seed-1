describe('Example', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
    
    it('should have welcome screen', async () => {
      await expect(element(by.id('welcome-0'))).toBeVisible();
    });
    
    it('should show detail screen on tap', async () => {
      await element(by.id('read_button_0')).tap();
      await expect(element(by.id('go_back'))).toBeVisible();
    });
    
    it('should go back from detail screen', async () => {
      await element(by.id('read_button_0')).tap();
      await element(by.id('go_back')).tap();
      await expect(element(by.id('welcome-0'))).toBeVisible();
    });
});