import axios from "axios";
import { useState } from "react";

function Insert (props) {

    const [seq_no, setSeqNo] = useState('');
    const [data, setData] = useState('');

    const RefreshList = props.RefreshList;

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        if(name === "seq_no") {
            setSeqNo(value);
        } else if (name === "col1") {
            setData(value);
        }
        
    }

    const onClickBtn= async(e)=> {
        e.preventDefault();
        const url = 'http://localhost:8080/main/insert';

        const postData = {
            seq_no : seq_no,
            col1 : data,
        };

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
            <form>
                <label>SEQ_NO : <input type="text" name="seq_no" onChange={handleChange}/> </label>
                <label>데이터 : <input type="text" name="col1" onChange={handleChange}/></label>
                <button onClick={onClickBtn}>등록</button>
            </form>
        </div>
    )
}

export default Insert;