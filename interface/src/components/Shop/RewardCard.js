


const RewardCard = (props) => {
    return (
        <div className='reward-card'>
            <img className='reward-img' src={props.img}/>
            <h4>{props.name}</h4>
            <button className="buy-btn" onClick={props.func} disabled={props.disabled}>{props.btnText}</button>
        </div>
    )
}

export default RewardCard