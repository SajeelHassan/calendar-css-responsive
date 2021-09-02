import './App.css';
import CalendarMain from './components/Calendar/Calendar';
import DayPickerSection from './components/DayPicker/DayPickerSection';
import Sidebar from './components/Sidebar/Sidebar';
import clsx from 'clsx';
import AppointmentSection from './components/AppointmentSection/AppointmentSection';

const App = () => {
  return (
    <div className={clsx('theApp')}>
      <Sidebar />
      <div className='appMain'>
        <CalendarMain />
        <div className='dayPickerAndAppointment'>
          <DayPickerSection />
          <AppointmentSection />
        </div>
      </div>
    </div>
  );
}

export default App;
