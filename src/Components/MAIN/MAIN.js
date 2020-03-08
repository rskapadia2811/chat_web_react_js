import React, { Component } from 'react'
import Header from './Header/Header'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import Register from '../Auth/Register/Register'
export default class MAIN extends Component {
    render() {
        return (
            <div>
                <Register/>
            </div>
        )
    }
}
