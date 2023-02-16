
import Calendar from "./Calendar/Calendar"
import UserContext from "../../context/user-context"
import React, {useContext, useEffect, useState} from "react"
import axios from "axios"
import HeaderCont from "./Header/HeaderCont"
import ShopContent from '../Shop/ShopContent'
import Inventory from "../Inventory/Inventory"
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
    
    const [innerCont, setInnerCont] = useState(<Calendar streak={profile.streak} />)
    const togglePageFunc = (page) => {
        if (page === 'cal'){
            setInnerCont(<Calendar streak={profile.streak} />)
        }else if (page === 'shop'){
            setInnerCont(<ShopContent />)
        }else if (page === 'inv'){
            setInnerCont(<Inventory />)
        }
    }
    console.log(profile)
    return (
        <UserContext.Provider value={{user:user.user, coins: profile.coins}}>
        
            {/* <QuotesRender /> */}
            <HeaderCont togglePage={togglePageFunc}/>

            {/* <a className="link-log" href="/api/logout/">Logout {user.user}</a><br />
            Streak: {profile.streak} */}
            <div id="content-wrap">
                {innerCont}
            </div>
        </UserContext.Provider>

    )
}

export default DashboardContent