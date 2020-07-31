import React from "react";

const CourseForm = (props) =>{
    return(
        <form onSubmit={props.addCourse}>
            <input type="text" onChange={props.UpdateCourse} value={props.current}/>
            <button type="submit">add Courses</button>
        </form>
    )
}

export default CourseForm