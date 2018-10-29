import React from 'react';
import follow from "../../api/follow";
import client from "../../api/client";

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.employee["firstName"],
            lastName: this.props.employee["lastName"],
            description: this.props.employee["description"]
        }
        this.updateEntity = this.updateEntity.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(oldEmployee) {
        follow(client, root, ['employees']).then(employeeCollection => {
            return client({
                method: 'PUT',
                path: employeeCollection.entity._links.self.href,
                entity: oldEmployee,
                headers: {'Content-Type': 'application/json'}
            })
        }).then(response => {
            return follow(client, root, [
                {rel: 'employees', params: {'size': this.props.pageSize}}]);
        }).done(response => {
            if (typeof response.entity._links.last !== "undefined") {
                this.props.onNavigate(response.entity._links.last.href);
            } else {
                this.props.onNavigate(response.entity._links.self.href);
            }
        });
    }

    onDelete() {
        let employee = this.props.employee;
        client({method: 'DELETE', path: employee._links.self.href}).done(response => {
            this.loadFromServer(this.props.pageSize);
        });
    }

    updateEntity(attribute, event) {
        this.setState({[attribute]: event.target.value});
    }

    render() {
        const inputs = this.props.attributes.map((attribute, index) =>
            <div className="form-group row" key={index}>
                <label htmlFor={attribute} className="col-sm-4 col-form-label">{attribute}</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control"
                           id={attribute} placeholder={attribute}
                           value={this.state[attribute]}
                           onChange={(event) => this.updateEntity(attribute, event)}/>
                </div>
            </div>
        );

        return (
            <form>
                <h4 className="title text-center">Update Fellowship</h4>
                <hr className="mb-md-4"/>
                {inputs}
                <div className="form-group row">
                    <div className="col">
                        <button type="submit" className="btn btn-danger btn-block" onClick={this.onDelete}>
                            Delete
                        </button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-warning btn-block">
                            Update
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Update;