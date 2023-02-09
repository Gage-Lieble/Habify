import axios from "axios"
import { useEffect, useState, useContext } from "react"
import UserContext from "../../../context/user-context"
const Day = (props) => {
    
    return (
        <>
        <div>
            Name: {props.user}
            Date: {props.day}
            Notes: {props.notes}
            Result: {props.activity}
        </div>
        </>
    )
}

export default Day