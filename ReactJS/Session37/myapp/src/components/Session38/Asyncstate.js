import React, { useEffect, useState } from 'react'

function Asyncstate() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            
            setTimeout(() => {
                setData({ id: 1, name: "John" });
                setIsLoading(false);
            }, 1000)

        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1>Async Function </h1>
            {isLoading?(<div className='spinner-border text-danger' role='status'>
            <span className="visually-hidden">Loading...</span>
            </div>):(error)?(<p>Error : {error.message}</p>):<p>Data:{JSON.stringify(data)}</p>}
        </div>
    )
}

export default Asyncstate
