import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./Menu";
import Insert from "./Insert";
import Update from "./Update";
import Delete from "./Delete";

function ListItem (props) {
    return (
        <li key={props.seq_no}>
            [{props.seq_no}] {props.value}
        </li>
    )
}

function GetList () {

    const [List, setList] = useState();

    useEffect(()=> {
        getData();
    }, []);

    function getData () {
        const url = 'http://localhost:8080/main/getList';
    
        // 데이터를 가져오는 함수를 정의합니다.
        axios.get(url, {
            headers: {
                "Content-Type" : "application/json",
            }
        }).then((item) => {
            const items = item.data.map((item) => (
                <ListItem key={item.seq_no} seq_no={item.seq_no} value={item.col1}/>
            ));
            setList(items);
        });
    }

    return (
        <div>
            <h1>데이터 목록</h1>
            <ul>
                {List}
            </ul>
            <Router>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route path="insert" element={<Insert RefreshList={getData}/>} />
                        <Route path="update" element={<Update RefreshList={getData}/>} />
                        <Route path="delete" element={<Delete RefreshList={getData}/>} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default GetList;