import * as React from 'react'
import jmoment from 'moment-jalaali'
import styles from './style.module.css';

import Day from './Day'
import DaysOfWeek from './DaysOfWeek'



interface propsInterface{
    popUp: boolean;
    autoClose: boolean;
    min: string;
    max: string;
    onSelectDate(selectedDate: string): void;
    onSelectDate2(selectedDate2: string): void;
    onSelectObjectDate(d: string): void;
    onSelectObjectDate2(d: string): void;
}

interface statesInterface{
    today: string;
    hoveredDate: string;
    showPopUp: boolean;
    selectedDate1: string;
    selectedDate2: string;
    fullDateFormat: string;
    dateFormat: string;
    YYYY: string;
    MMMM: string;
    type: string;

    activeInput: number;

}


class Calendar extends React.Component<propsInterface, statesInterface>{

    constructor(props: propsInterface){
      super(props)
      this.state = {
        today: jmoment().format('jYYYY-jMM-jDD'),
        hoveredDate: '',
        showPopUp:(this.props.popUp === undefined?true : false),
        selectedDate1:'',
        selectedDate2:'',
        fullDateFormat:'jYYYY-jMM-jDD dddd jMMMM',
        dateFormat:'jYYYY-jMM-jDD',
        YYYY:'jYYYY',
        MMMM:'jMMMM',
        type: 'fa',

        activeInput: 0,
      }
  }
  
  
  addMonth = (date: string, plus:number=1) => {
    return jmoment(date,'jYYYY-jMM-jDD').add(plus,'month').format('jYYYY-jMM-jDD')
  }
  
  daysInMonth(YYYY: string, MM: string){
  
    const  jMonth = jmoment(YYYY + '-' + MM + '-01', 'jYYYY-jMM-jDD').jMonth()
  
    if(jMonth<6)
        return 31
    if(jMonth<11)
        return 30
    if(jMonth===11 && jmoment(YYYY + '-' + MM + '-01', 'jYYYY-jMM-jDD').isLeapYear())
        return 30
    else 
        return 29
  }
  
  getFullFirstOfDate = (today: string) => {
    const [ date ] = today.split(' ')
    const [ YYYY, MM ] = date.split('-')
  
    return jmoment(YYYY + '-' + MM + '-01', 'jYYYY-jMM-jDD').add(0, 'day').format(this.state.fullDateFormat)
  }
  
  getNameOfDate = (d: string) => {
    return d.split(' ')[1]
  }
  
  fillAllMounth = (firstOfMounth: string) => {
    const [ YYYY, MM ] = firstOfMounth.split('-');
  
   
  return [ ...new Array(this.daysInMonth(YYYY, MM)).keys() ]
  .map((nextSteps) => {
    const nextStep = jmoment(YYYY + '-' + MM + '-01', 'jYYYY-jMM-jDD')
      .add(nextSteps, 'day')
      .format(this.state.fullDateFormat);
  
    if (nextStep === 'Invalid date​​​​​') return '';
    else {
      const [ DATE,,] = nextStep.split(' ');

      return (
                    <Day 
                        setHoverDate={(hoveredDate: string)=>this.setState({hoveredDate})}
                        setSelectedDate={this.setSelectedDate} 
                        setSelectedDate2={this.setSelectedDate2}
                        hoveredDate={this.state.hoveredDate}
                        selectedDate1={this.state.selectedDate1} 
                        selectedDate2={(this.state.selectedDate2)}
                        date={DATE}
                        activeInput={this.state.activeInput}
                        min={this.props.min}
                        max={this.props.max}
                        disable={false}/>
      );
    }
  })
  .filter((i) => i !== '');
  }
  
  getNameOfLastDayInMonth = (date: string) => {
      const [YYYY, MM] = date.split('-')

      let lastOfMounth = jmoment(YYYY + '-' + MM + '-01', 'jYYYY-jMM-jDD')
      .add(-1, 'day')
      .format(this.state.fullDateFormat)

      return jmoment(lastOfMounth, 'jYYYY-jMM-jDD').format('dddd')
  }

  fillUntillFriDay = (nameOfFirstDate: string) => {

    let DateMap = [
        [ 6, 'Saturday' ],
        [ 5, 'Sunday' ],
        [ 4, 'Monday' ],
        [ 3, 'Tuesday' ],
        [ 2, 'Wednesday' ],
        [ 1, 'Thursday' ],
        [ 0, 'Friday' ]
    ]

    let countOfEmpty = DateMap.filter((i) => i[1] === nameOfFirstDate)[0][0]
    let x = new Array(countOfEmpty).fill('X').map((i) => {
        return <Day  disable
                    date={''}
                    selectedDate1={''}
                    selectedDate2={''}
                    hoveredDate={''}
                    activeInput={0}
                    min={''}
                    max={''}
                    setHoverDate={(date: string)=>{}}
                    setSelectedDate={(date: string)=>{}}
                    setSelectedDate2={(date: string)=>{}}/>
    })
    return x
  }


  fillBetweenSaturday = (nameOfFirstDate: string) => {

    let DateMap = [
        [ 0, 'Saturday' ],
        [ 1, 'Sunday' ],
        [ 2, 'Monday' ],
        [ 3, 'Tuesday' ],
        [ 4, 'Wednesday' ],
        [ 5, 'Thursday' ],
        [ 6, 'Friday' ]
    ]

    let countOfEmpty = DateMap.filter((i) => i[1] === nameOfFirstDate)[0][0];
    let x = new Array(countOfEmpty).fill('X').map((i) => {
        return <Day  disable
                    date={''}
                    selectedDate1={''}
                    selectedDate2={''}
                    hoveredDate={''}
                    activeInput={0}
                    min={''}
                    max={''}
                    setHoverDate={(date: string)=>{}}
                    setSelectedDate={(date: string)=>{}}
                    setSelectedDate2={(date: string)=>{}}/>
    })
    return x
  }


  renderTopMenu = (dateFormat: string) => {
    console.log(jmoment(this.state.today, 'jYYYY-jMM-jDD').format(this.state.MMMM))
    return(
        <React.Fragment>
            <div className={styles['topMenuStyle']}>
                    <button onClick = {() => {
                        this.setState({today: jmoment(this.state.today, 'jYYYY-jMM-jDD').add(-1, 'year').format(dateFormat)})
                    }}>{'<'}</button>
                    <p>{jmoment(this.state.today, 'jYYYY-jMM-jDD').format(this.state.YYYY)}</p>
                    <button onClick = {() => {
                        this.setState({today: jmoment(this.state.today, 'jYYYY-jMM-jDD').add(+1, 'year').format(dateFormat)})
                    }}>{'>'}</button>
            </div>

            <div className={styles['topMenuStyle']}>
                    <button onClick = {() => {
                        this.setState({today: jmoment(this.state.today, 'jYYYY-jMM-jDD').add(-1, 'month').format(dateFormat)})
                    }}>{'<'}</button>
                    <p>{jmoment(this.state.today, 'jYYYY-jMM-jDD').format(this.state.MMMM)}</p>
                    <button onClick = {() => {
                        this.setState({today: jmoment(this.state.today, 'jYYYY-jMM-jDD').add(+1, 'month').format(dateFormat)})
                    }}>{'>'}</button>
            </div>

        </React.Fragment>
    )
  }

renderMonth = (plus: number) => {



    let today = this.addMonth(this.state.today, plus)

    const firstOfMounth = this.getFullFirstOfDate(today)
    const nameOfFirstDate = this.getNameOfDate(firstOfMounth)
    const nameOfLastDate = this.getNameOfLastDayInMonth(firstOfMounth)
    let _BETWEEN_SATURDAY_ = this.fillBetweenSaturday(nameOfFirstDate)
    let _DAYS_IN_MONTH_ = this.fillAllMounth(firstOfMounth)
    let _UNTIL_FRIDAY_ = this.fillUntillFriDay(nameOfLastDate)

    return [ ..._BETWEEN_SATURDAY_, ..._DAYS_IN_MONTH_, ..._UNTIL_FRIDAY_ ]
}
  
renderNMonthAfterToday = (plus: number) => {

    return(
        <div
        style={{display: 'flex', flexDirection: 'column'}}>
            <DaysOfWeek type = {this.state.type}/>
            
            <div className={'calendarContainer'}>
            {this.renderMonth(plus)}
            </div>
        </div>
    )
}


togglePopUp = (inp: number) => {

    if(this.props.popUp !== undefined){
        this.setState({showPopUp: !this.state.showPopUp})
        this.setState({activeInput: inp})
    }else{
        this.setState({showPopUp: true})
        this.setState({activeInput: 0})
        
    }
}

renderPopUp = () => {

    return(
        <React.Fragment>
            {this.renderTopMenu(this.state.dateFormat)}
            <div style = {{display: 'flex', flexDirection: 'row'}}>
                {this.renderNMonthAfterToday(0)}
                
        </div>

        </React.Fragment>
    )
}

  
  render(){
    return(
        <div className={'mainContainer'}>
            <input type='text'
                value = {this.state.selectedDate1}
                onClick = {() => this.togglePopUp(1)} />
                    {<input type='text' value={this.state.selectedDate2} 
                                        onClick={() => this.togglePopUp(2)} />} 
                    {
                        this.state.showPopUp && this.renderPopUp()
                    }

        </div>
    )
  }

generalizeDate = (date: string) => {
      return((JSON.stringify({fa: date })))
  }

setSelectedDate=(selectedDate1: string) => {
    this.setState({selectedDate1})
    this.props.onSelectDate(selectedDate1)
    this.props.onSelectObjectDate && this.props.onSelectObjectDate(this.generalizeDate(selectedDate1))
    this.props.autoClose && this.setState({showPopUp:false})
}
setSelectedDate2=(selectedDate2: string) => {
    this.setState({selectedDate2})
    this.props.onSelectDate2 && this.props.onSelectDate2(selectedDate2)
    this.props.onSelectObjectDate2 && this.props.onSelectObjectDate2(this.generalizeDate(selectedDate2))
    this.props.autoClose && this.setState({showPopUp:false})
}


  }

  export default Calendar
