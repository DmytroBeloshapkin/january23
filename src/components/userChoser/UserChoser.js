import {useEffect, useState} from "react";

import {getUserAxios} from "../../services/user.api.axios.service";

const UserChoser = () => {

    const [user, setUser] = useState(null);

    let [id, setId] = useState(1);

    const increment = () => {
        id++;
        setId(id);
    }

    const decrement = () => {
        id--;
        setId(id);
    }


    useEffect(() => {
        getUserAxios(id).then(({data}) => {
            setUser(data);
        })
    }, [id]);


    return (
        <div>

            <h5>{JSON.stringify(user)}</h5>
            <button onClick={() => {decrement(id)}}>previos</button>
            <button onClick={() => {increment(id)}}>next</button>
        </div>
    );
};

export {UserChoser};