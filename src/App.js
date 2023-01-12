import {Users} from "./components/users/Users";
import {UserChoser} from "./components/userChoser/UserChoser";

function App() {
    return (
        <div>
            {<UserChoser/>}
            <Users/>
        </div>
    );
}

export default App;
