import React from "react";

const UserContext = React.createContext({
    user: '',
    coins: '0',
    streak: '0'
})

export default UserContext