import { View, Text, Button } from '../Components';
import { ALLNAMEOFMONTHS, ALLNAMEOFWEEK } from '../Utils/Consts';
import { useCalendar } from '../Hooks/useCalendar';

import Styles from './styles'

export const Calendar = () => {
  const { increaseMonth, decreaseMonth, createMonth, currentMonth, currentYear } = useCalendar()
  const fullMonth = createMonth()

  return (
    <View style={{ "flexDirection": 'column', ...Styles.container }}>
      <View style={Styles.header}>
        <Button name="previous" label="<" onClick={() => decreaseMonth(1)} />
        <Text>{`${ALLNAMEOFMONTHS[currentMonth]}, ${currentYear}`}</Text>
        <Button name="next" label=">" onClick={() => increaseMonth(1)} />
      </View>

      <View style={Styles.namesOfWeek}>
        {ALLNAMEOFWEEK.map(name => (<Text style={Styles.nameOfWeek} key={name}>{name}</Text>))}
      </View>

      <View style={{flexWrap: "wrap", ...Styles.daysOfMonth}}>
        {fullMonth.map((day, index) => (<Button name={day.toString()} label={day.toString()} style={Styles.dayOfMonth} key={index} />))}
      </View>
    </View>);
};
