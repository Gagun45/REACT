import type {FC} from "react";
import type {ICourse} from "../../models/CourseModel.ts";

type Props = {
    course: ICourse
}

const CourseComponent:FC<Props> = ({course}) => {
    return (
        <li className='flex flex-col gap-2 bg-slate-400 p-1 border'>
            <h3>{course.title}</h3>
            <p>Duration - {course.hourDuration} hours / {course.monthDuration} months</p>
            <ul className='bg-blue-950 pl-8 text-white'>
                {course.modules.map((module,index)=><li key={index}>{module}</li>)}
            </ul>
        </li>
    );
};

export default CourseComponent;