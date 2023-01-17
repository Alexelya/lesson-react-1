import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-info p-3">
            <a className="navbar-brand" href="#">
            <img src="https://sportslogosvg.com/wp-content/uploads/2020/09/eagles-logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
            <h1>Eagles <span className="badge badge-secondary"></span></h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Emails</a>
                    <ul class="dropdown-menu bg-black-50">
                        <li><a class="dropdown-item" href="#">Inbox</a></li>
                        <li><a class="dropdown-item" href="#">Sent</a></li>
                        <li><a class="dropdown-item" href="#">Trash</a></li>
                    </ul>
                </li>
                <form class="d-flex" role="search"> 
                    <input class="form-control me-2" type="search" placeholder="Type to search..." aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </ul>
           
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;