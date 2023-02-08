import QuotesRender from "./quotes/QuotesRender"
import Calendar from "./Logger/Calendar"
import UserContext from "../../context/user-context"
import React, {useContext} from "react"

const DashboardContent = () => {
    const user = useContext(UserContext)
    return (
        <>
        This is Dashboard!
        <QuotesRender />
        <Calendar />
        <a href="/api/logout/">Logout {user}</a>
        </>
    )
}

export default DashboardContent