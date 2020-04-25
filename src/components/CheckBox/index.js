import React from 'react';
import { CheckBox } from 'react-native-elements';
import styles from '../../styles/common.module.scss';

const CustomCheckBox = (props) => (
  <CheckBox
    containerStyle={{ backgroundColor: '#fff', borderWidth: 0, marginLeft: 0 }}
    {...props}
  />
);

export default CustomCheckBox;
