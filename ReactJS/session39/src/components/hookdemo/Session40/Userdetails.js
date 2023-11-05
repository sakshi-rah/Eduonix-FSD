import React, { useEffect, useState } from 'react'
import './Userdetails.css'
import axios from 'axios';

function Userdetails() {
    const [users, setUsers] = useState([]);
    const getData = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(resp.data)
            setUsers(resp.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    },[])
    return (
        <div>
            <h1>User Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => {
                            return (<tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td> 
                                <td>{item.username}</td>
                                <td>{item.email}</td> 
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Userdetails