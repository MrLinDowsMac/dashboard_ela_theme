import React from "react";
import TodoListElementComponent from "../todolistelement/todolistelement.component";

class TodoListComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            taskText : '',
            tasklist : [
                {
                    "idTask" : 1248,
                    "taskText" : "Build a react app",
                    "checked" : false,
                    "colorType" : this.randomColor()
                },
                {
                    "idTask" : 900,
                    "taskText" : "Creating component page",
                    "checked" : true,
                    "colorType" : this.randomColor()
                },
                {
                    "idTask" : 100,
                    "taskText" : "Follow back those who follow you",
                    "checked" : false,
                    "colorType" : this.randomColor()
                },
                {
                    "idTask" : 120,
                    "taskText" : "Design One page theme",
                    "checked" : true,
                    "colorType" : this.randomColor()
                },
                {
                    "idTask" : 814,
                    "taskText" : "Creating component page",
                    "checked" : true,
                    "colorType" : this.randomColor()
                }
            ]
        }
    }

    randomColor() {  return this.classesforTodoElement[Math.floor(Math.random()* this.classesforTodoElement.length)] }

    handleChange = (e) => {
        const currtasklist  = this.state.tasklist;
        this.setState({tasklist: currtasklist, taskText: e.target.value})
    }

    handleEnter = (e) => {
        //console.log(v)
        if (e.keyCode === 13) {
        const prevtasklist = this.state.tasklist;
        this.setState({
            //const list = state.tasklist.concat(state.value);
            taskText: '',
            tasklist: //[
                //...prevState.tasklist,
                //[prevState.tasklist[1].name]: e.target.value,
                //...prevState.tasklist.push(
                    prevtasklist.concat(
                    {
                        "idTask": Math.round(Math.random() * 1000) ,
                        "taskText" : e.target.value,
                        "checked" : false,
                        "colorType" : this.randomColor()
                    })
                //]//)
            },
            //console.log(e.target.value)
        );
        e.target.value = ''
    }
  }

    handleCheck = (e, value, index) => {
        const currentStateTasklist = this.state.tasklist;
        const replaceVal = currentStateTasklist[index];
        replaceVal.checked = e.target.checked; 
        currentStateTasklist[index] = replaceVal;
        this.setState( { tasklist: currentStateTasklist  } );               
    }

    classesforTodoElement = ["bg-primary","bg-success","bg-warning","bg-danger"];

    render(){
        const { tasklist } = this.state;
    return(
        <div className={this.props.className} >
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <div className="card-content">
                        <div className="todo-list">
                            <div className="tdl-holder" >
                                {tasklist.map((task, index) => {
                                    //console.log(task);
                                    return (<TodoListElementComponent key={task.idTask} task={task} 
                                        handleclick={ e =>  { this.setState( { 
                                            tasklist : tasklist.filter(tk => task.idTask !== tk.idTask )
                                            })  }  } 
                                        onChange={ (e) => this.handleCheck(e,task, index) }
                                        className={ task.colorType }
                                            />)
                                })}
                                <input type="text" className="tdl-new form-control" placeholder="Type here" 
                                    onKeyDown={this.handleEnter} value={this.props.taskText} onChange={this.handleChange} ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default TodoListComponent;