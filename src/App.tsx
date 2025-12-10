const coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

const App = () => {
    return (
        <ul className='bg-slate-500'>
            {coursesTitleArray.map((course, i) => <li key={i}>{course}</li>)}
        </ul>
    );
};

export default App;
