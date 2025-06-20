import { useState, useEffect, useRef } from "react";

import Edit from "./components/Edit.jsx";
import List from "./components/List.jsx";
import "./index.css";
import { API_GET_DATA } from "../../global/constants.jsx"

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
    console.log(data);

}


async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
}

const Home = () => {
    // const [a, setA] = useState(100)
    // function plus() {
    //     setA(function (prev) {
    //         return prev + 200
    //     })
    // }

    const [data, setData] = useState([]); //內容物有三個
    const submittingStatus = useRef(false)

    useEffect(() => {
        if (!submittingStatus.current) {
            return
        }
        // fetch(API_GET_DATA)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        fetchSetData(data)
            .then(data => submittingStatus.current = false)
    }, [data])

    useEffect(() => {
        fetchData(setData)
    }, [])




    // useEffect(() => {
    //     console.log('只有一次');

    // }, [])

    return (
        <div className="app">
            {/* {a}
        <button onClick={plus}>加法</button> */}

            <Edit add={setData} submittingStatus={submittingStatus} />
            <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
        </div>
    );
};

export default Home;
