import Axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import styled from "styled-components";
import { setUser } from "./actions";
import {makeSelectUser} from './selectors'

const UserContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const UserWrapper = styled.div`
flex-direction: column;
display: flex;
align-items: center;
margin: 5px;

`
const UserImg = styled.div`
width: 7em;
height: 7em;
img {
    width: 100%;
    height: 100%auto;
}
`
const UserName = styled.h3`
font-size: 20px;
color: black;
margin: 0;
`
const UserEmail = styled.h3`
font-size: 20px;
color: black;
margin: 0;
`

const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}))

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
})

const UserPage = () => {
    const {user} = useSelector(stateSelector)
    const {setUser} = actionDispatch(useDispatch())
    const {userId} = useParams()
    const fetchUser = async (id) => {
        const response = await Axios.get(`https://reqres.in/api/users/${id}`)
        .catch((err) => {
            console.log('Err ', err);
        })
        console.log('userid : ', response.data.data);
        if (response)
        setUser(response.data.data)
    }
    useEffect(() => {
        if(userId && userId !== "") {
            fetchUser(userId)
        }
    }, [userId])
    if(!user) 
        return <div>
            Loading....
        </div>
    
    return <> 
    <UserContainer>
        <UserWrapper>

        <UserImg>
        <img src={user.avatar} />
        </UserImg>
        <UserName>
        {user.first_name}  {user.last_name}
        </UserName>
        <UserEmail>
            {user.email}
        </UserEmail>
        </UserWrapper>
    </UserContainer>
    <Link to={"/"}>
        <button >Back home</button>
    </Link>
    </>
}
 
export default UserPage;