import React from "react";

function SpinnerComponent(props){
    if (props.isBusy){
        return (
            <div className="preloader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
            </div>
        )
    }
    else {
        return null
    }
    
}

export default SpinnerComponent;