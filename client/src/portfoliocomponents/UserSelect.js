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
        <>
            <label htmlFor="user-select">User: </label>
            <select name='user-select' onChange={onChange} defaultValue='selected'>
                <option disabled value='selected'>Select A User</option>
                {userOptions}
            </select>
        </>
    )
}

export default UserSelect