import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../context/ClientContext';

const SignIn = () => {
    const { loginUser } = useContext(clientContext)
    const history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    function handleInput(e) {
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(obj)
    }
    function handleClick() {
        loginUser(user, history)
    }

    return (
        <>
            <h2>asdf</h2>
            <div>
                <input onChange={handleInput} name="email" value={user.name} type="text" />
                <input onChange={handleInput} name="password" value={user.password} type="password" />
                <button onClick={handleClick}>SIGN IN</button>
            </div>
        </>
    );
};

export default SignIn;