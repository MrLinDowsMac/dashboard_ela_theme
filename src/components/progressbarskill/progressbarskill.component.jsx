import React from "react";
//import  defaultdata  from './progressbarskill.defaultdata.json';
import defaultdata from "../../pages/Ecommerce/progressbar.defaultdata.json";

class ProgressBarSkillComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = defaultdata
    }
    
    render(){
        const { title, headersStyle, ...otherprops } = this.props;
        //console.log(headersStyle);
       
        return(
        // <div className="col-md-4 p-r-40 m-t-30 m-b-30">
        <div {...otherprops} >
            { title !== "" ? <h4 className="card-title">{title}</h4> : null }
            {this.state.data.map( dataElement => (
                <React.Fragment key={dataElement.id}>
                    { headersStyle === 'paragraph' ?  
                        <p className="f-w-600">{dataElement.name}<span className="pull-right">{dataElement.percentage}%</span></p>
                    :
                        <h5 className="m-t-30">{dataElement.name}<span className="pull-right">{dataElement.percentage}%</span></h5>
                    }
                   <div className="progress ">
                    
                        <div className={"progress-bar bg-" + dataElement.bootstrapColor + " wow animated progress-animated"} style={{width: `${dataElement.percentage}%`, height: "6px" } } role="progressbar"> <span className="sr-only">${dataElement.percentage}% Complete</span> </div>
                   </div>
                </React.Fragment>
            ))  
            }
        </div>) 
    }
    
    
}

export default ProgressBarSkillComponent;