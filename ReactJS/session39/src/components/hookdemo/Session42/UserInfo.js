import { useState } from "react";
import { useAuthContext } from "./AuthContext";



function UserInfo() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login, logout } = useAuthContext();

    const loginUser = () => {
        login({ username, password });
        setUsername('');
        setPassword('');
    }

    return (
        <div>
            {
                user ? (
                    <div className='bg-primary w-50 m-auto p-5 rounded text-light fs-5'>
                        <p> Welcome, {user.username}!</p>
                        <button onClick={logout} className='btn btn-warning fs-5'>Logout</button>

                    </div>
                ) : (
                    <div className='bg-primary w-50 m-auto p-5 rounded text-light'>

                        <h3> Login Page</h3><br />

                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className='p-1 rounded fs-5 border' />
                        <br /><br />
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='p-1 rounded fs-5 border' />
                        <br /><br></br>
                        <button onClick={loginUser} className='btn btn-warning fs-5'>Login</button>

                    </div>
                )

            }

        </div>
    );
}

export default UserInfo;