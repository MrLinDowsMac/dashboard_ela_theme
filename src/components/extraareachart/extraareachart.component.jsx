import React from "react";
//import Raphael from 'raphael';
//import $ from 'jquery'; 
//import 'morris.js/morris.css';
//import Morris from 'morris.js/morris.js';
//import  defaultdata from './defaultdata';


class ExtraAreaChartComponent extends React.Component {
    //constructor(props){
    //    super(props);
        //console.log(props);
        //window.Raphael = Raphael;
        //console.log(this.Morris);
    //}

    componentDidMount(){
        
        // this.yourChart = Morris.Area ({
        //     element: 'extra-area-chart',
        //     data: defaultdata,
        //     lineColors: [ '#26DAD2', '#fc6180', '#62d1f3', '#ffb64d', '#4680ff' ],
        //     xkey: 'period',
        //     ykeys: [ 'iphone', 'imac', 'ibook', 'samsung', 'android' ],
        //     labels: [ 'iphone', 'imac', 'ibook', 'samsung', 'android' ],
        //     pointSize: 0,
        //     lineWidth: 0,
        //     resize: true,
        //     fillOpacity: 0.8,
        //     behaveLikeLine: true,
        //     gridLineColor: '#e0e0e0',
        //     hideHover: 'auto'
        //   });
    }
    
    render(){
            const {title, ...otherprops }  = this.props;
        // {size = "lg", column_size = "12",title}) => {
            return(
            // <div className={"col-" + size + "-" + column_size}  >
            // <div className={"col-lg-12"}>
            <div {...otherprops} >
                <div className="card">
                    <div className="card-body">
                        {/* <h4 className="card-title">{title}</h4> */}
                        <h4 className="card-title">{title}</h4>
                        <div id="extra-area-chart"></div>
                    </div>
                </div>
            </div>
            )
    }
}

export default ExtraAreaChartComponent;