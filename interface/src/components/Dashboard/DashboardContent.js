import QuotesRender from "./quotes/QuotesRender"
import DayLogger from "./Logger/DayLogger"

const DashboardContent = (props) => {
    return (
        <>
        This is Dashboard!
        <QuotesRender />
        <DayLogger user={props.loggedUser} />
        <a href="/api/logout/">Logout {props.loggedUser}</a>
        </>
    )
}

export default DashboardContent