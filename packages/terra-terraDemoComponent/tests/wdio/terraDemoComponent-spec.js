Terra.describeViewports('TerraDemoComponent', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-terra-demo-component/terra-demo-component/default-terra-demo-component'));

    it('validates the element', () => {
      Terra.validates.element('TerraDemoComponent');
    });
  });
});
