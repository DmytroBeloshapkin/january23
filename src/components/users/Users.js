import {useEffect, useState} from "react";

import {getUsersAxios} from "../../services/user.api.axios.service";

import {User} from "../user/User";

const Users = () => {

    const [users, setUsers] = useState([])

    const [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj)
    };

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((value) => value.json())
    //         .then(value => {
    //             setUsers(value)
    //             // console.log(value);
    //         })
    // }, [])

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            <hr/>
            {
                user && <div>{JSON.stringify(user.phone)}</div>
            }
            <hr/>
            {
                users.map((user, index) => (<User
                    key={index}
                    user={user}
                    lift={lift}/>))
            }
        </div>
    );
};

export {Users};