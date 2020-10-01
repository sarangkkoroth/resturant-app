import React from 'react'
import './GuestBook.css'
function GuestBook() {
    return (
        <div className="guestbook">
            <h1>GuestBook</h1>
            <div className="container">
            <div className="col1">
                <h2>Name</h2>
                <h2>Mobile</h2>
                <h2>Email</h2>
                <h2>Remark</h2>
               
            </div>
            <div className="col2">
            
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            </div>
            </div>
            <button className="button">Book</button>
        </div>
    )
}

export default GuestBook
