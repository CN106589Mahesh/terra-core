import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './TerraDemoComponent.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const TerraDemoComponent = ({ name, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const TerraDemoComponentClassNames = classNames(
    cx([
      'terra-demo-component',
      theme.className,
    ]),
    customProps.className,
  );

  return (<button type="button" {...customProps} className={TerraDemoComponentClassNames}>{name}</button>);
};

TerraDemoComponent.propTypes = propTypes;
TerraDemoComponent.defaultProps = defaultProps;

export default TerraDemoComponent;
