Terra.describeViewports('TerraDemoComponent', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-terraDemoComponent/terraDemoComponent/default-terraDemoComponent'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
