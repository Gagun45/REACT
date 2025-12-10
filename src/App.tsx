import {coursesArray} from "./data/data.ts";
import CourseComponent from "./components/course-component/CourseComponent.tsx";

const App = () => {
    return (
        <>
            <h1 className='text-center text-3xl py-4'>Courses Info</h1>
            <ul className="flex flex-col gap-4 bg-slate-500 p-4">
                {coursesArray.map((course, index) => <CourseComponent key={index} course={course}/>)}
            </ul>
        </>
    );
};

export default App;
