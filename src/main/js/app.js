import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/employees'}).done(response => {
            this.setState({employees: response.entity._embedded.employees});
        });
    }

    render() {
        return (
            <EmployeeList employees={this.state.employees}/>
        )
    }
}

class EmployeeList extends React.Component {
    render() {
        const employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee}/>
        );
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col-7">
                        <table className="table table-striped table-hover table-sm">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {employees}
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <form>
                            <div className="form-group row">
                                <label for="firstName" className="col-sm-3 col-form-label">Firstname</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="firstName" placeholder="Insert firstname here..." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="lastName" className="col-sm-3 col-form-label">Lastname</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="lastName" placeholder="Insert lastname here..."/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="descriptions" className="col-sm-3 col-form-label">Descriptions</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="descriptions" placeholder="Insert descriptions here..."/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <button type="submit" className="btn btn-success btn-block mb-2 mx-3"><i className="la la-save"/> Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
)
