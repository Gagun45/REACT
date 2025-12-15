import {useCustomHook} from "./hooks/useCustomHook.tsx";

const App = () => {

    const users = useCustomHook<{id: number, name: string}[]>('https://jsonplaceholder.typicode.com/users')
    return (
        <h1 className="text-red-400">
            {users&&users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </h1>
    );
};

export default App;
