
import Calendar from "./Calendar/Calendar"
import UserContext from "../../context/user-context"
import React, {useContext, useEffect, useState} from "react"
import axios from "axios"
import HeaderCont from "./Header/HeaderCont"
import ShopContent from '../Shop/ShopContent'
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
    },[setProfile, user])

    console.log(profile)
    
    return (
        <UserContext.Provider value={{user:user.user, coins: profile.coins}}>
        
            {/* <QuotesRender /> */}
            <HeaderCont />
            <Calendar />
            <a className="link-log" href="/api/logout/">Logout {user.user}</a><br />

            Coins: {profile.coins}<br/>
            Streak: {profile.streak}
            <ShopContent />
        </UserContext.Provider>

    )
}

export default DashboardContent