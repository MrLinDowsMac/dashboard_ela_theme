import React from "react";
import defaultdata from "./commentssection.defaultdata.json" ;

const CommentsSectionComponent = ({title, className}) => {
    return(
    <div className={className}>
        <div className="card">
            <div className="card-title">
                <h4>{title}</h4>
            </div>
            <div className="recent-comment">
                { defaultdata.map( comment =>  {
                    return (<div className="media" key={comment.idComment}>
                        <div className="media-left">
                            <span href="#"><img alt="..." src={require(`../../${comment.profilePic}`)} className="media-object" /></span>
                        </div>
                        <div className="media-body" style={{ "textAlign": "left"}} >
                            <h4 className="media-heading">{comment.name}</h4>
                            <p> { comment.commentText } </p>
                            <p className="comment-date">{ comment.commentDate }</p>
                        </div>
                    </div>)
                    })
                }
            </div>
        </div>
    </div>)
}

export default CommentsSectionComponent;

