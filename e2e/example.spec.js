describe('Example', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
    
    it('should have welcome screen', async () => {
      await expect(element(by.id('welcome-0'))).toBeVisible();
    });
    
    it('should show hello screen after tap', async () => {
      await element(by.id('hello_button_0')).tap();
      await expect(element(by.text('Hello!!!'))).toBeVisible();
    });
    
    it('should show world screen after tap', async () => {
      await element(by.id('world_button_0')).tap();
      await expect(element(by.text('World!!!'))).toBeVisible();
    });
});