import React, { useEffect, useState } from 'react'

function Submissiontimer({ submissionDate }) {
    const [timeleft, setTimeLeft] = useState(null);

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const submissionTime = new Date(submissionDate).getTime();
        const timeDifference = submissionTime - now;

        if (timeDifference <= 0) {
            setTimeLeft("Submission Closed");
        } else {
            const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
            const hours = Math.floor(timeDifference % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
            const minutes = Math.floor(timeDifference % (60 * 60 * 1000) / (60 * 1000));
            const seconds = Math.floor(timeDifference % (60 * 1000) / (1000));

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }

    useEffect(() => {
        calculateTimeLeft();

        const timeInterval = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timeInterval);

    }, [submissionDate])

    return (
        <div className='container w-75 bg-primary text-light rounded p-3 mt-5 '>
            <h1>Submission Timer</h1>
            <div className='d-flex justify-content-around p-2 m-3 row'>
                <div className='col'>
                    <h2><span className='bg-warning p-1 rounded'>Deal</span> of the Day</h2>
                    <p>Kindly Project Submit within 6days, Do your best! <br/> All the best Students. </p>
                </div>
                <div className='col'>
                    <h3>Time Left</h3>
                    <p className='fs-4 bg-light text-dark p-1 w-50 m-auto rounded border'>{timeleft}</p>
                </div>
            </div>
        </div>
    )
}

export default Submissiontimer