import React from 'react';

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav aria-label="Page Navigation">
                <ul className="pagination pagination-sm justify-content-sm-center">
                    <li className="page-item"><a className="page-link">First</a></li>
                    <li className="page-item"><a className="page-link">Prev</a></li>
                    <li className="page-item">
                        <select className="form-control form-control-sm" id="pagelimit">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
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