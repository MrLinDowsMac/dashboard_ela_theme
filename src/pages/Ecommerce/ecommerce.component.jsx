import React, { Fragment }  from "react";
import  IndicatorCardsContainer  from "../../components/indicatorcardscontainer/indicatorcardscontainer.component";
import ExtraAreaChartComponent from "../../components/extraareachart/extraareachart.component";
import ProgressBarSkillComponent from "../../components/progressbarskill/progressbarskill.component";
import TestimonialWidgetComponent from "../../components/testimonialwidget/testimonialwidget.component";
import TableBasicComponent from "../../components/tablebasic/tablebasic.component";

import tablebasicdata from "./tablebasic.data.json";
import CommentsSectionComponent from "../../components/commentssection/commentssection.component";


const EcommercePage = () => {
    return(
        <Fragment>
        <IndicatorCardsContainer />
        <div className="row bg-white m-l-0 m-r-0 box-shadow ">
                <ExtraAreaChartComponent  title="Extra Area Chart"
                    className={"col-lg-8"} />
                <div className="col-lg-4">
                    <div className="card">
                        <ProgressBarSkillComponent  className="card-body browser" headersStyle="paragraph" title="" />  
                    </div>
                </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <div className="card bg-dark">
                    <TestimonialWidgetComponent className="testimonial-widget-one p-17" />
                </div>
            </div>
            <TableBasicComponent className="col-lg-9" title="Recent Orders">
                <table className="table">
                        <thead>
                            <tr>
                                 {/* //(tablebasicdata.length > 0 ? /*Object.keys(tablebasicdata[0]).map(header => */ }
                                 <th></th><th>#</th><th>Name</th><th>Product</th><th>Quantity</th><th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        { tablebasicdata.map( element =>  { return ( 
                            <tr key={element.Id}>
                                <td>
                                    <div className="round-img">
                                        <span><img src={ require(`../../${ element.ProfileImg }`)} alt=""/></span>
                                    </div>
                                </td>
                                <td>{element.Id}</td>
                                <td>{element.Name}</td>
                                <td><span>{element.Product}</span></td>
                                <td><span>{element.Quantity}</span></td>
                                <td><span className={`badge ${element.Status === "Done" ? 'badge-success' : 'badge-warning'}`} >{element.Status}</span></td>
                            </tr>
                            )})}
                        </tbody>
                </table>
            </TableBasicComponent>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <CommentsSectionComponent className="col-lg-6" title="Messages" />
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default EcommercePage;