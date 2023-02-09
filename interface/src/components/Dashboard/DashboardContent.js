import QuotesRender from "./quotes/QuotesRender"
import Calendar from "./Calendar/Calendar"
import UserContext from "../../context/user-context"
import React, {useContext, useEffect, useState} from "react"
import axios from "axios"
const DashboardContent = () => {
    const user = useContext(UserContext)
    const [profile, setProfile] = useState({})
    useEffect(() => {
        axios.get('api/profile/').then(res =>{
            for (let pro of res.data){
                if (pro.user === user.user){
                    setProfile(pro)
                }
            }
        })
    },[setProfile])

    console.log(profile)
    
    return (
        // <UserContext.Provider value={{}}>
        <>
        
            <QuotesRender />
            <Calendar />
            <a href="/api/logout/">Logout {user.user}</a>

            Coins: {profile.coins}<br/>
            Streak: {profile.streak}
        </>
        // </UserContext.Provider>

    )
}

export default DashboardContent