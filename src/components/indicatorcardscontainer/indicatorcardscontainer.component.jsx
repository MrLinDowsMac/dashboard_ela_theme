import React from "react";
import IndicatorCard from "../indicatorcard/indicatorcard.component";
import "../../styles/helper.css";

const IndicatorCardsContainer = () => {
    return(
        <div className="row">
            <IndicatorCard colorType="primary" title="Total Revenue" value="568120"
            fontIcon="fa-usd" />
            <IndicatorCard colorType="success" title="Sales" value="1178"
            fontIcon="fa-shopping-cart" />
            <IndicatorCard colorType="warning" title="Stores" value="25"
            fontIcon="fa-archive"/>
            <IndicatorCard colorType="danger" title="Customer" value="847"
            fontIcon="fa-user" />
        </div>
    )
}

export default IndicatorCardsContainer;