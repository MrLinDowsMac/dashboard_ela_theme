import React from "react";
import "../../styles/helper.css";
/*Color Type: primary, warning, danger,*/ 
/*fontIcon fa-usd, fa-shopping-cart,fa-archive,fa-user  */
const IndicatorCard = ({colorType, title, value, fontIcon}) => {
    return(
    <div className="col-md-3">
        <div className="card p-30">
            <div className="media">
                <div className="media-left meida media-middle">
                    <span><i className={"fa " + fontIcon + " f-s-40 color-" + colorType} ></i></span>
                </div>
                <div className="media-body media-text-right">
                    <h2>{value}</h2>
                    <p className="m-b-0">{title}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default IndicatorCard;