import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';

import { DirectionProp } from '../../shared/props';
import { checkInsideGrid, warn } from '../../utils';


const styles = StyleSheet.create({
  horizontal: {
    alignItems: 'flex-start', // Required to support RN42+ due a bug with wrap
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  vertical: {
    alignItems: 'flex-start', // Required to support RN42+ due a bug with wrap
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  stretch: {
    flex: 1,
    alignSelf: 'stretch',
  },
});


/**
 * Component used to contain group of Blocks.
 *
 * @type {React.StatelessComponent<{stretch?: boolean, style?: any, children: any, gap?: number}>}
 */
const Section = ({ children, style, stretch, gap }, { gridContentDirection, gridStretch }) => {
  if (process.env.NODE_ENV === 'development') {
    warn(
      !gridStretch && !!stretch,
      'Using `stretch` on `Section` without using `stretchable` on `Grid` has no stretching effect because grid itself won\'t be stretched and section will just collapse so it won\'t be visible.\nPlease make `Grid` stretchable as well.',
    );
  }

  return (
    <View
      style={[
        (gridContentDirection === 'vertical' ? styles.vertical : styles.horizontal),
        (stretch ? styles.stretch : null),
        style,
      ]}
    >
    {React.Children.map(children, (child, itr) => {
      return React.cloneElement(child, {
        isLastChild: children.length === (itr + 1),
        gap,
      })
    })}
    </View>
  );
};


Section.contextTypes = {
  gridContentDirection: checkInsideGrid(DirectionProp),
  gridStretch: checkInsideGrid(PropTypes.bool),
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: ViewPropTypes.style,
  stretch: PropTypes.bool,
  gap: PropTypes.number,
  isLastChild: PropTypes.bool,
};

Section.defaultProps = {
  style: {},
  stretch: false,
  gap : 0,
  isLastChild : false,
};

export default Section;
