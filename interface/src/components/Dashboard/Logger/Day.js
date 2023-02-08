import axios from "axios"
import { useEffect, useState, useContext } from "react"
import UserContext from "../../../context/user-context"
const Day = (props) => {
    
    return (
        <>
        <div>
            Name: {props.user}
            Date: {props.date}
            Notes: {props.notes}
            Result: {props.result.toString()}
        </div>
        </>
    )
}

export default Day