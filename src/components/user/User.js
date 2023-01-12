const User = ({user, lift}) => {
    return (
        <div>
            <h2>{user.id}. {user.name}</h2>

            <button onClick={() => {
                lift(user)
            }}>details
            </button>
        </div>
    );
};

export {User};