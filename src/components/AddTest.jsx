import { useState } from "react";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";

const AddTest = () => {
    const [test_name, setName] = useState(null);
    const [test_cost, setCost] = useState(null);
    const [test_desc, setDesc] = useState(null);
    const [more_info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);

    const Submit = (e) => {
        
        e.preventDefault(); 
        setLoading(true);
        console.log("Submitting");

        axiosInstance.post("/add_test",{
            test_name,
            test_cost,
            test_desc,
            more_info
        }
        ).then(function(response) {
            console.log(response.data);
            setLoading(false);
            setSuccess(response.data.message);
            setName('');
            setCost('');
            setDesc('');
            setInfo('');

        }).catch(function (error){
            console.log(error.message);
            setLoading(false);
            setFailure(error.message);
            setSuccess(null);
        }
        );
    }
    return ( 
        <div>
            <Layout/>
            <Main>
                <form className="card shadow p-4" onSubmit={Submit}>
                    <div className="card-body">
                        {loading && <div className="text_warning">Loading...</div>}
                        {success && <div className="text_success">{success}</div>}
                        {failure && <div className="text_danger">{failure}</div>}
                        <input 
                            type="text" 
                            placeholder="Enter Test Name" 
                            className="form-control" 
                            value={test_name} 
                            onChange={(e)=> setName(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="text" 
                            placeholder="Enter Test Description" 
                            className="form-control" 
                            value={test_desc} 
                            onChange={(e)=> setDesc(e.target.value)} 
                            required
                        /><br/><br/>
                        <input type="text" placeholder="Enter Test Cost" className="form-control" value={test_cost} onChange={(e)=> setCost(e.target.value)} required/><br/><br/>
                        <input type="text" placeholder="Enter More Info" className="form-control" value={more_info} onChange={(e)=> setInfo(e.target.value)} required/><br/><br/>
                        <button className="btn btn-dark">Add Test</button>
                    </div>
                </form>
            </Main>
        </div>
     );
}
 
export default AddTest;