import React from 'react';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: this.props.pageSize
        }
        this.updateNav = this.updateNav.bind(this);
    }

    updateNav(event) {
        this.setState({pageSize: event.target.value});
        this.props.updatePageSize(this.state.pageSize);
        console.log("pageSize: " + this.state.pageSize);
    }

    render() {
        return (
            <nav aria-label="Page Navigation">
                <ul className="pagination pagination-sm justify-content-sm-center">
                    <li className="page-item"><a className="page-link">First</a></li>
                    <li className="page-item"><a className="page-link">Prev</a></li>
                    <li className="page-item">
                        <select
                            className="form-control form-control-sm"
                            id="pagelimit"
                            value={this.state.pageSize}
                            onChange={this.updateNav}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>
                    </li>
                    <li className="page-item"><a className="page-link">Next</a></li>
                    <li className="page-item"><a className="page-link">Last</a></li>
                </ul>
            </nav>
        )
    }

}

export default Nav;