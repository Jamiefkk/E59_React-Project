const UserDetails = ({selectedUser}) => {
    
    
    return(
        <>
            <h3>{selectedUser.name}</h3>
            <h4>Wallet: £{selectedUser.wallet}</h4>
        </>
    )
}

export default UserDetails