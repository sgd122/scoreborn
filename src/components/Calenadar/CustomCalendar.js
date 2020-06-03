import React from 'react';
import {View, Text} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import styles from '../../styles/common.module.scss';
// https://www.npmjs.com/package/react-native-calendars

const CustomCalendar = (props) => {
  return (
    <View>
      <Calendar titleFormat={'YYYY-MM-DD'} />
    </View>
  );
};

LocaleConfig.locales['Kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  // today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'Kr';
export default CustomCalendar;
