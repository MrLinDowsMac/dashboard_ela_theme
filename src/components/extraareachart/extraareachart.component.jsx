import React from "react";
//import Raphael from 'raphael';
//import $ from 'jquery'; 
//import 'morris.js/morris.css';
//import 'morris.js/morris.js';


class ExtraAreaChartComponent extends React.Component {
    // constructor(){
    //     super();
    //     //window.Raphael = Raphael;
    // }
    render(){
        // {size = "lg", column_size = "12",title}) => {
            return(
            // <div className={"col-" + size + "-" + column_size}  >
            <div className={"col-lg-12"}>
                <div className="card">
                    <div className="card-body">
                        {/* <h4 className="card-title">{title}</h4> */}
                        <h4 className="card-title">Extra Area Chart</h4>
                        <div id="extra-area-chart"></div>
                    </div>
                </div>
            </div>
            )
    }

    componentDidMount(){
        
    }
}

export default ExtraAreaChartComponent;