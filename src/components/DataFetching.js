import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Avatar } from '@material-ui/core';

function DataFetching() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://5d11b2ce84e906001457646a.mockapi.io/testdata')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="dataFetching">
            <div className="navbar">
                <nav><h2>Inteliheads Assignment</h2></nav>

            </div>

            <div className="fetchdata">
                <ul>
                    {
                        data.map(data => <li key={data.id}>
                            <h4>id:  {data.id} </h4>
                            <Avatar url={data.avatar} />
                            <h4>Created At: {data.createdAt}</h4>
                            <h4>Name: {data.name} </h4>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default DataFetching

// 
