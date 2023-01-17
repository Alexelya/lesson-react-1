import React,{Component} from "react";


class Header extends Component{
    state={
        linkHome : "Home",
        linkAbout : "About",
        linkContacts : "Contacts",
        linkFaq : "FAQ"
    };
    render(){
        return(
            <nav>
                <ul >
                    <li><a href="/home">{this.state.linkHome}</a></li>
                    <li><a href="/about">{this.state.linkAbout}</a></li>
                    <li><a href="/contacts">{this.state.linkContacts}</a></li>
                    <li><a href="/faq">{this.state.linkFaq}</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header;