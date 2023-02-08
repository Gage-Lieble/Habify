import QuotesRender from "./quotes/QuotesRender"


const DashboardContent = (props) => {
    return (
        <>
        This is Dashboard!
        <QuotesRender />
        <a href="/api/logout/">Logout {props.loggedUser}</a>
        </>
    )
}

export default DashboardContent