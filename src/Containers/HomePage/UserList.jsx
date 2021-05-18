import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {createSelector} from 'reselect'
import styled from 'styled-components'
import {makeSelectUsers} from './selectors'

const UserContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
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
const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users,
}))
const UserList = () => {
    const {users} = useSelector(stateSelector)
    const isEmptyUsers = !users || (users && users.length == 0);

    const history = useHistory()
    const goToUserPage = (id) => {
        history.push(`/user/${id}`)
    }

    if (isEmptyUsers){

        return null;
    }
    console.log('THE USERS IN LIST COMPONENT :', users );
    return <UserContainer>
    {users.map((user, id) => ( 
        <UserWrapper key={id} onClick={() => goToUserPage(user.id)}>
            <UserImg>
                <img src={user.avatar} />
            </UserImg>
            <UserName>
                {user.first_name}  {user.last_name}
            </UserName>
        </UserWrapper>
    ))}
    </UserContainer>
    
}
 
export default UserList;