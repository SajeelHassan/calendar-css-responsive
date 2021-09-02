import clsx from 'clsx';
import React from 'react'
import AppointmentCards from './AppointmentCards/AppointmentCards';
import AppointmentForm from './AppointmentForm/AppointmentForm';
import classes from './AppointmentSection.module.css'

const APPOINTMENT_DATA = [
    {
        title: 'Haareschneiden',
        price: '15€',
        time: '30min'
    },
    {
        title: 'Haareschneiden',
        price: '15 €',
        time: '30min'
    },
    {
        title: 'Haareschneiden',
        price: '15 €',
        time: '30min'
    },
    {
        title: 'Haareschneiden',
        price: '15 €',
        time: '30min'
    },
    {
        title: 'Haareschneiden',
        price: '15 €',
        time: '30min'
    },
    {
        title: 'Haareschneiden',
        price: '15 €',
        time: '30min'
    },
    {
        title: 'Haareschneiden',
        price: '15 €',
        time: '30min'
    },
    {
        title: 'Haareschneiden',
        price: '15 €',
        time: '30min'
    },
]
const AppointmentSection = () => {
    return (
        <div className={clsx('m-3 bg-white mt-0', classes.appointmentSection)}>
            <AppointmentCards data={APPOINTMENT_DATA} />
            <AppointmentForm />
        </div>
    )

}
export default AppointmentSection;


