import React from "react";
//import defaultdata from './defaultdata.json'

const TableBasicComponent = ({title, children, ...otherprops }) => {  
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
    </div>)
}

export default TableBasicComponent