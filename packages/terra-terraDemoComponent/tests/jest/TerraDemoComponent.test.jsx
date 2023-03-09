import React from 'react';
import TerraDemoComponent from '../../src/TerraDemoComponent';

describe('TerraDemoComponent', () => {
  const defaultRender = <TerraDemoComponent />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terraDemoComponent').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class terraDemoComponent', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terraDemoComponent');
  });
});
