import React from "react";
//import  ReactDOM  from "react-dom";
import $ from 'jquery'
import  'pg-calendar/dist/js/pignose.calendar.js' ;
import 'pg-calendar/dist/css/pignose.calendar.css'

class CalendarComponent extends React.Component {

    // constructor(props){
    //     super(props);
        
    // }

    render(){
        return <div >
            <div className="card">
                <div className="card-body">
                   <div className="year-calendar"  ></div>
                 </div>
             </div>
            </div>
    }

    componentDidMount(){
        //var $this = $(ReactDOM.findDOMNode(this));
        //console.log($this);
        //console.log($('.year-calendar'));
        //const calendar = new pignose(this.$el)
        //console.log($(this.el).parent());
        //this.inputRef.current.pignoseCalendar();
        //$('.year-calendar').pignoseCalendar();
        this.$el = $(this.el)
        //this.$el.pignoseCalendar();
    }
    
}

export default CalendarComponent;