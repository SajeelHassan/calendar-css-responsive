import React, { useState } from 'react'
import DayPicker, { MomentLocaleUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './dayPickerStyles.css';
import classes from './DayPickerSection.module.css';
import clsx from 'clsx';
const DayPickerSection = () => {
    const [selectedDay, setSelectedDay] = useState(undefined);

    function handleDayClick(day) {
        setSelectedDay(day);
    }

    return (
        <div className={clsx('bg-white m-3', classes.dayPickerMain)} >
            <DayPicker
                onDayClick={handleDayClick}
                selectedDays={selectedDay}
                selectedDay={selectedDay}
                localeUtils={MomentLocaleUtils}
                showOutsideDays={true}
                className={classes.dayPickerCard}
            />
        </div>
    )
}
export default DayPickerSection;