import { View, Text, Button } from '@/Components';
import { ALLNAMEOFMONTHS, ALLNAMEOFWEEK } from '@/Utils/Consts';
import { useCalendar } from '@/Hooks/useCalendar';

import '@/Styles/Global.scss';
import Styles from './styles.module.scss';

export const Calendar = () => {
  
  const { createMonth, currentMonth } = useCalendar()
  const fullMonth = createMonth()

  return (
    <View className={Styles.container}>
      <View className={Styles.header}>
        <Button name="previous" label="<" />
        <Text>{ALLNAMEOFMONTHS[currentMonth]}</Text>
        <Button name="next" label=">" />
      </View>

      <View className={Styles.namesOfWeek}>
        {ALLNAMEOFWEEK.map(name => (<Text key={name} className={Styles.nameOfWeek}>{name}</Text>))}
      </View>

      <View className={Styles.daysOfMonth}>
        {fullMonth.map((day, index) => (<Text key={index} className={Styles.dayOfMonth}>{day}</Text>))}
      </View>
    </View>);
};
