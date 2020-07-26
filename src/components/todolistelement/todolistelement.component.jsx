import React from "react";
//import './todolistelement.styles.scss'
//import { Link } from "react-router-dom";

class TodoListElementComponent extends React.Component {
    constructor(props){
        super(props);
        this.task = props.task;
    }
    

    componentDidMount(){
        //console.log(this.props);
    }

    render(){
        return(
        <div className="tdl-content">
            <ul>
                <li>
                    <label  onMouseDown={e => { if (e.detail > 1){e.preventDefault();}  } } >
                        <input type="checkbox" checked={this.task.checked} 
                         onChange={this.props.onChange} key={this.task.idTask}
                        /><i className={this.props.className}></i><span>{this.task.taskText}</span>
                        {// eslint-disable-next-line 
                        <a onClick={this.props.handleclick} className="ti-close"></a >
                        }
                    </label>
                </li>
            </ul>
        </div>
        )}
}

export default TodoListElementComponent;