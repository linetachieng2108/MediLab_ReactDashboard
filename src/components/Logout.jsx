import { useNavigate } from "react-router-dom";
import CheckSession from "../helpers/CheckSession";

const Logout = () => {
    const {username, admin_id, token} = CheckSession();
    let navigate = useNavigate();
    if (token){
        localStorage.clear();
        return navigate('/login')
    }
    // return (  );
}
 
export default Logout;