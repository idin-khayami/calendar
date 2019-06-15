import * as React from 'react';


import './App.css';

import Calendar from './CalendarComponents/Calendar'


class ShowCalendar extends React.Component<any, any>{
  render(){

    return(<Calendar 
            popUp
            autoClose = {true}
            min={'1398-02-09'}
            max={''}
            onSelectDate={(d: string)=>{}}
            onSelectDate2={(d: string) => {}}
            onSelectObjectDate={(d: string)=> alert(`You picked ${d.slice(7,17).replace(/-/g, '/')} as your first date.`)}
            onSelectObjectDate2={(d: string)=> alert(`You picked ${d.slice(7,17).replace(/-/g, '/')} as your second date.`)}

    />)
  }
}



export default ShowCalendar;


