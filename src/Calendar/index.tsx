import { View, Text } from '@/Components';
import { ALLNAMEOFWEEK, DAYSOFMONTH } from '@/Utils/Consts';
import { getFirstDayOfMonthInWeek, getLastDayOfMonth } from '@/Utils/Date';

import '@/Styles/Global.scss';
import Styles from './styles.module.scss';

export const Calendar = () => {
  
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  const lastDayOfMonth = getLastDayOfMonth(currentYear, currentMonth);
  
  const lastMonthDate = new Date(today.setMonth(currentMonth - 1))
  const lastMonth = lastMonthDate.getMonth()
  const lastYear = lastMonthDate.getFullYear()
  const lastDayOfLastMonth = getLastDayOfMonth(lastYear, lastMonth);
  
  const firstDayOfMonthInWeek = getFirstDayOfMonthInWeek(currentYear, currentMonth)

  const daysOfLastMonth = new Array(firstDayOfMonthInWeek).fill(0).map((_, index) => lastDayOfLastMonth - index).reverse()
  const daysOfMonth = new Array(lastDayOfMonth).fill(0).map((_, index) => index + 1)
  const daysOfNextMonth = new Array(DAYSOFMONTH -lastDayOfMonth - firstDayOfMonthInWeek).fill(0).map((_, index) => index + 1)

  const fullMonth = [...daysOfLastMonth, ...daysOfMonth, ...daysOfNextMonth]

  return (
    <View className={Styles.container}>
      <View className={Styles.namesOfWeek}>
        {ALLNAMEOFWEEK.map(name => (<Text key={name} className={Styles.nameOfWeek}>{name}</Text>))}
      </View>

      <View className={Styles.daysOfMonth}>
        {fullMonth.map((day, index) => (<Text key={index} className={Styles.dayOfMonth}>{day}</Text>))}
      </View>
    </View>);
};
