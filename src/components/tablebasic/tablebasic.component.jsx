import React from "react";
//import defaultdata from './defaultdata.json'

const TableBasicComponent = ({title, children, ...otherprops }) => {  
    if (children.type === "table"){
    return(<div {...otherprops}>
         <div className="card">
            <div className="card-title">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    {children}
                </div>
            </div>
         </div>
    </div>)}
    else{
        console.log("You should provide a table inside this component")
        return(<div></div>)
    }
    
}

export default TableBasicComponent