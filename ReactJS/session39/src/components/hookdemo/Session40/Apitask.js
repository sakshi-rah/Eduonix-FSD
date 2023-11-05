import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Apitask() {
    const [users, setUsers] = useState([]);
    const getData = async () => {
        try {
            const resp = await axios.get('http://universities.hipolabs.com/search?country=india')
            console.log(resp.data)
            setUsers(resp.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <h1>Today Task on Fetch  APIs Data </h1>
            <table className='bg-dark text-light border '>
                <thead>
                    <tr>
                        <th className='border p-1'>Name</th>
                        <th className='border p-1'>Alpha_two_code</th>
                        <th className='border p-1'>Web_pages</th>
                        <th className='border p-1'>Domains</th>
                        <th className='border p-1'>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => {
                            return (<tr>
                                <td className='border p-1'>{item.name}</td>
                                <td className='border p-1'>{item.alpha_two_code}</td>
                                <td className='border p-1'>{item.web_pages}</td>
                                <td className='border p-1'>{item.domains}</td>
                                <td className='border p-1'>{item.country}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Apitask