import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function Delete (props) {

    const [data, setData] = useState([]);
    const RefreshList = props.RefreshList;
    
    useEffect(()=> {
        getData();
    }, []);

    const getData = () => {
        const url = 'http://localhost:8080/main/getList';
    
        // 데이터를 가져오는 함수를 정의합니다.
        axios.get(url, {
            headers: {
                "Content-Type" : "application/json",
            }
        }).then((item) => {
            setData(item.data);
        });
    }

    const deleteItem = async(e) => {
        const target = e.target;
        const seq_no = target.value;
        
        const url = 'http://localhost:8080/main/delete';

        const postData = {
            seq_no : seq_no,
        };

        try{
            const response = await axios.post(url, postData);
            console.log(response.data);
            RefreshList();
            getData();
        }catch(error) {
            console.error();
        }
    };

    return (
        <div>
            <h1>App.js 출력</h1>
            <ul>
                {
                    data.map(item => (
                        <li key={item.seq_no}>
                            [SEQ_NO={item.seq_no}]{item.col1}
                            <button onClick={deleteItem} value={item.seq_no}>삭제</button>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

export default Delete;