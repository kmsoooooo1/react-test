import axios from "axios";
import { useEffect, useState } from "react";

function Update (props) {

    const [list, setList] = useState([]);
    const [postData, setPostData] = useState('');

    const RefreshList = props.RefreshList;

    useEffect(()=>{
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
            setList(item.data);
        });
    }

    const handleChange = (e) => {
        
        const target = e.target;
        const text = target.value;
        const name = target.name;

        setPostData({
            seq_no : name,
            col1 : text
        });
    }

    const onClickBtn = async(e)=> {
        e.preventDefault();
        const url = 'http://localhost:8080/main/update';
        try{
            const response = await axios.post(url, postData);
            console.log(response.data);
            RefreshList();
        }catch(error) {
            console.error('Error');
        }
    }

    return (
        <div>
            <ul>
                {
                    list.map(item=>(
                        <li key={item.seq_no}>
                            <div>
                                <input type="text" name={item.seq_no} defaultValue={item.col1} onChange={handleChange}/>
                                <button onClick={onClickBtn} value={item.seq_no}>수정</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default Update;