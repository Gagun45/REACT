import type {CourseType} from "../../models/Course.ts";
import type {FC} from "react";

type CourseComponentProps = {
    course: CourseType;
}


const CourseComponent:FC<CourseComponentProps> = ({course}) => {
    return (
        <li className='border-2'>
            <h2>{course.title}</h2>
            <p>{course.monthDuration}</p>
        </li>
    );
};

export default CourseComponent;