import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import Axios from 'axios'
import {setUsers} from './action'
import UserList from "./UserList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users,
}))

const actionDispatch = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users))
})

const HomePage = () => {
    const {users} = useSelector(stateSelector)
    const {setUser} = actionDispatch(useDispatch())
    const fetchUsers = async () => {
        const response = await Axios.get('https://reqres.in/api/users')
            .catch((Err) => {
                console.log('Err: ', Err);
            })
        setUser(response.data.data)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    // console.log('users: ', users);
    return ( 
        <UserList />
     );
}
 
export default HomePage;