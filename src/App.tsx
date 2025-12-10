import {coursesAndDurationArray} from "./data/data.ts";
import CourseComponent from "./components/course-component/CourseComponent.tsx";

const App = () => {
    return (
        <ul className="flex flex-col gap-4 border border-green-300 p-4 m-4">
            {coursesAndDurationArray.map((course, i) => (<CourseComponent key={i} course={course}/>))}
        </ul>
    );
};

export default App;
