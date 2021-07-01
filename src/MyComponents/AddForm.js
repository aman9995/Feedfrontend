import React, { useState } from 'react';
import axios from 'axios'
export const AddForm = ({setmylist}) => {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [suggestion, setSuggestion] = useState("");

    

    function PostFeedback(e){
        e.preventDefault()
        if (!fname || !lname || !suggestion) {
            alert("These fields cannot be blank");
        }
        else {
            let nm = gender + "" + fname + " " + mname + " " + lname
            axios.post("https://aman-server.herokuapp.com/newuser", { name: nm, suggestion: suggestion })
                .then(res => {
                    console.log(res);
                    
                })
                .catch(err => {
                    console.log(err);
                })
            
                axios.get('/getalluser')
                .then(res=>{
                  console.log('this side=>',res);
                  setmylist(res.data)
                })
                .catch(err=>{
                  console.log(err);
                })
         }
    }

    function resetinfo(){
        
            setFname("");
            setMname("");
            setLname("");
            setGender("");
            setSuggestion("");
    }

    function RefetchFeedback(){
        axios.get('https://aman-serverherokuapp.com/getalluser')
                .then(res=>{
                  console.log('this side=>',res);
                  setmylist(res.data)
                })
                .catch(err=>{
                  console.log(err);
                })
    }
    return (
        <section className="Left">
            <div className = "container">
                <ul>
                    <li>
                        <label htmlFor="fname"><b>FIRST NAME :</b></label><hr/>
                        <input type="text" id="fname" name="fname" value={fname} onChange={(e) => { setFname(e.target.value) }}/>
                    </li>

                    <li>
                        <label htmlFor="mname"><b>MIDDLE NAME :</b></label><hr/>
                        <input type="text" id="mname" name="mname" value={mname} onChange={(e) => { setMname(e.target.value) }}/>
                    </li>

                    <li>
                        <label htmlFor="lname"><b>LAST NAME :</b></label><hr/>
                        <input type="text" id="lname" name="lname" value={lname} onChange={(e) => { setLname(e.target.value) }}/>
                    </li>
        
                    <li>
                        <label htmlFor="Gender"><b>GENDER :</b></label><hr/>
                        Male<input type="radio" id="gender" name="gender" value="Mr." onChange={(e) => { setGender(e.target.value) }} />
                        Female<input type="radio" id="gender" name="gender" value="Ms." onChange={(e) => { setGender(e.target.value) }} />
                    </li>

                    <li>
                        <label htmlFor="suggestion"><b>SUGGESTION :</b></label><hr/>
                        <textarea id="suggestion" value={suggestion} name="suggestion" onChange={(e) => { setSuggestion(e.target.value) }}/>
                    </li>
                    
                    <li>
                        <button type="submit" onClick={PostFeedback} className="btn btn-success">SUBMIT</button><br/>
                        <button type="submit" onClick={resetinfo} className="btn btn-success">RESET</button><br/>
                        <button type="submit" onClick={RefetchFeedback} className="btn btn-success">REFETCH</button>
                    </li>
            
                </ul>
            </div>
        </section>

    )
}

