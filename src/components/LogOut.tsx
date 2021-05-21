import React from "react";
import axios from "axios";

import { history } from "../router/Approuter";

export default class LogOutM extends React.Component<any> {

    handleClick = () => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/logout`, {headers: {
            "x-auth": sessionStorage.getItem("JWT_Token")
        }}).then(() => {
            sessionStorage.removeItem("JWT_Token")
            sessionStorage.removeItem("User_ID")
            sessionStorage.removeItem("name")
            sessionStorage.removeItem("status")
            history.push("/login")
        })
    }

    render() {
        return (
            <button onClick={this.handleClick} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white">
                Log Out
            </button>
        )
    }
}