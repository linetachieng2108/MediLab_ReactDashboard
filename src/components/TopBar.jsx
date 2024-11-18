import styled from "styled-components"; 
import { AiFillCalendar, AiOutlineAppstore, AiFillBell } from "react-icons/ai";

import Avatar from "../images/download.png";

const TopBar = () => {
    return ( 
        <Nav>
            <div className="admin">Admin Dashboard</div>
            <div className="content">
                <div className="date">
                    <AiFillCalendar />
                    <span>Admin Username</span>
                </div>

                <div className="icon">
                    <AiOutlineAppstore />
                    <span>/</span>
                    <AiFillBell />
                    <div className="image">
                        <img src={Avatar} alt="" />
                    </div>

                </div>
            </div>

            
        </Nav>
     );
     
}
 
export default TopBar;

const Nav = styled.nav`
display: flex;
    position: fixed;
    z-index: 0;
    top: 0;
    right: 0;
    justify-content: space-between;
    background-color: aliceblue;
    overflow: auto;
    width: 75%;
    .admin{
        color: orange;
        display: flex;
        margin-top: 5;
        align-items: center;
        margin-left: 10px;
        input{
            padding: 2px;
            border-radius: 1px;
        }
    }
    .content{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        align-items: center;
        .date{
            background-color: white;
            color: black;
            display: flex;
            align-self: center;
            padding: 0.3rem;
            height: 10px;
            span{
                color: gray;
            }
            svg{
                margin-right: 8px;
                color: brown;
                font-size: 24px;
            }
        }
        .icon{
            display: flex;
            align-items: center;
            padding-left: 1rem;
            gap: 1rem;
            svg{
                columns: brown;
                font-size: 24px;
            }
            .image{
                margin-right: 10%;
                img{
                    color: aliceblue;
                    font-size: 24px;
                    width: 40px;
                    margin-right: 5%;
                }
            }
        }
    }
`;