


const HeaderCont = (props) => {
    return (
        <div id="navbar">
            <img id="nav-logo" src="static/imgs/brand/soberize.svg" />
            <span className="r-nav">
                <button className="nav-link" onClick={() => props.togglePage('cal')}><img style={{width: '30px'}} src="static/imgs/nav/calendar-icon.svg" /></button>
                <button className="nav-link" onClick={() => props.togglePage('shop')}><img style={{width: '30px'}} src="static/imgs/nav/shop-icon.svg" /></button>
                <button className="nav-link" disabled={props.disabled} onClick={() => props.togglePage('inv')}><img style={{width: '30px'}} src="static/imgs/nav/profile-icon.svg" /></button>
                <div id="nav-pfp">L</div>
            </span>
        </div>
    )
}

export default HeaderCont