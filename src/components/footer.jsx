import React from "react"

let curDate=new Date()
let year=curDate.getFullYear()

function Footer(){
    return(
        <footer>
        <p1>CopyrightÂ© {year}</p1>
        </footer>
    )
}

export default Footer;