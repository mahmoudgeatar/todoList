import React, {Component} from 'react';
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";

class App extends Component {

  state={
    courses:[
     { name:"html"},
     { name:"css"},
     { name:"java script"}
    ],
    current : ""
  }

  //updateCourse
  updateCourse=(e) =>{
    this.setState({
      current : e.target.value
    })
  }


  //addCourse
  addCourse=(e) =>{
    e.preventDefault();
    let current =this.state.current;
    let courses =this.state.courses;
     if(current===""){
       return false
     }else{
      courses.push({name:current})
      this.setState({
        courses,
        current : ""
      })
     }
  }

  //delet Course
  deletCourse = (index) =>{
    let courses =this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }


  //editCourse
  editCourse = (index, value) =>{
    let courses =this.state.courses;
    let course =courses[index];
    course["name"] = value;
    this.setState({
      courses
    })
  }


  render(){
    const {courses} =this.state;
    const courseList = courses.map((course , index) => {
      return  <CourseList details={course} key={index} index={index} update={this.handelChange} deletCourse={this.deletCourse} editCourse={this.editCourse} /> 
    })

    return (
      <section className="App">
         <h2>Add Courses</h2>
          <CourseForm current={this.state.current}  UpdateCourse={this.updateCourse} addCourse={this.addCourse}/>
         <ul>{this.state.courses.length  > 0 ? courseList : <p>There Is No Courses To Show</p>}</ul>  
      </section>
    );
  }
}

export default App;
