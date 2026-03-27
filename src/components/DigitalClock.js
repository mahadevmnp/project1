import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState({});

    const updateTime = () => {
        const utc = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const est = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        const ist = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        const jst = new Date().toLocaleString('en-JP', { timeZone: 'Asia/Tokyo' });

        setTime({ utc, est, ist, jst });
    };

    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h1>Digital Clock</h1>
            <div style={{ fontSize: '2em', margin: '10px' }}>
                <div><strong>UTC:</strong> {time.utc}</div>
                <div><strong>EST:</strong> {time.est}</div>
                <div><strong>IST:</strong> {time.ist}</div>
                <div><strong>JST:</strong> {time.jst}</div>
            </div>
        </div>
    );
};

export default DigitalClock;