import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckSession = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const admin_id = localStorage.getItem("admin_id");
    const token = localStorage.getItem("token");

    useEffect(function(){
        if(!username && !admin_id && !token){
            localStorage.clear()
            return navigate("/login");
        }
    }, [username,admin_id,token]);

    return { username, admin_id, token }
}
 
export default CheckSession;