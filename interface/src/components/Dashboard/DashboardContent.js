import QuotesRender from "./quotes/QuotesRender"
import DayLogger from "./Logger/DayLogger"
import UserContext from "../../context/user-context"
import React, {useContext} from "react"

const DashboardContent = () => {
    const user = useContext(UserContext)
    return (
        <>
        This is Dashboard!
        <QuotesRender />
        <DayLogger />
        <a href="/api/logout/">Logout {user}</a>
        </>
    )
}

export default DashboardContent