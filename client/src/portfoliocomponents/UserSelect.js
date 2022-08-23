const UserSelect = ({users, changeSelectedUser}) => {
    
    const userOptions = users.map( (user, i) => {
        return(
            <option key={i} value={i}>{user.name}</option>
        )
    } )
    
    const onChange = (event) => {
        console.log(event.target.value);
        changeSelectedUser(event.target.value)
    }

    return(
        <select onChange={onChange}>
            <option selected disabled>select user</option>
            {userOptions}
        </select>
    )
}

export default UserSelect