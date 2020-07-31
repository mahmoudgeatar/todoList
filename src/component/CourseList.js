import React, {Component, Fragment} from 'react';

class CourseList extends Component {

  state={
    isEdit:false
  }

  renderCourse =() =>{
    return(
      <li>
       <span> {this.props.details.name} </span>
       <button onClick={() =>{this.toggleState()}}>Edit Course</button>
       <button onClick={() => this.props.deletCourse(this.props.index)}>Delete Course</button>
     </li>
    )
  }

  toggleState = () =>{
    let{isEdit}=this.state;
    this.setState({
      isEdit:!isEdit
    })
  }

  updateCourseItem= (e) =>{
    e.preventDefault();
    this.props.editCourse(this.props.index,this.input.value);
    this.toggleState();
  }

  renderUpdate= () =>{
    return(
      <form onSubmit={this.updateCourseItem}>
        <input typr ="text" ref={(v)=>{this.input = v}} defaultValue={this.props.details.name} />
        <button>Update Course</button>
      </form>
    )
  }

  updateCourseItem = (e) =>{
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  }

  render(){
    let {isEdit}=this.state;
    return (
      <Fragment>
        {isEdit ? this.renderUpdate() : this.renderCourse() }
      </Fragment>
    );
  }
}

export default CourseList;
