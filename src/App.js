import './App.css';
import CalendarMain from './components/Calendar/Calendar';
import DayPickerSection from './components/DayPicker/DayPickerSection';
import Sidebar from './components/Sidebar/Sidebar';
import AppointmentSection from './components/AppointmentSection/AppointmentSection';

const App = () => {
  return (
    <div className='theApp'>
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
