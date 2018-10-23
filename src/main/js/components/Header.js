import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: "fellowship"
        }
    }

    gantiMenu(menu, e) {
        e.preventDefault();
        this.props.panggilMenu(menu);
        this.setState({menu: menu});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#">DASHBOARD</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menubar"
                        aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={this.state.menu === "fellowship" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="#"
                               onClick={(e) => this.gantiMenu("fellowship", e)}>Fellowship</a>
                        </li>
                        <li className={(this.state.menu === "about") ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="#" onClick={(e) => this.gantiMenu("about", e)}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Header;