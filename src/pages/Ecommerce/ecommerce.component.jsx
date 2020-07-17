import React, { Fragment }  from "react";
import  IndicatorCardsContainer  from "../../components/indicatorcardscontainer/indicatorcardscontainer.component";
import ExtraAreaChartComponent from "../../components/extraareachart/extraareachart.component";
import ProgressBarSkillComponent from "../../components/progressbarskill/progressbarskill.component";

const EcommercePage = () => {
    return(
        <Fragment>
        <IndicatorCardsContainer />
            <div className="row bg-white m-l-0 m-r-0 box-shadow ">
                <ExtraAreaChartComponent size="lg" column_size="8" title="Extra Area Chart" />
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body browser">
                            <ProgressBarSkillComponent headersStyle="paragraph" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EcommercePage;