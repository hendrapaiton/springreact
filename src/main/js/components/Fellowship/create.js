import React from 'react';
import follow from "../../api/follow";
import client from "../../api/client";

class Create extends React.Component {
    constructor(props) {
        super(props);
    }

    onCreate(newEmployee) {
        follow(client, root, ['employees']).then(employeeCollection => {
            return client({
                method: 'POST',
                path: employeeCollection.entity._links.self.href,
                entity: newEmployee,
                headers: {'Content-Type': 'application/json'}
            })
        }).then(response => {
            return follow(client, root, [
                {rel: 'employees', params: {'size': this.state.pageSize}}]);
        }).done(response => {
            if (typeof response.entity._links.last !== "undefined") {
                this.onNavigate(response.entity._links.last.href);
            } else {
                this.onNavigate(response.entity._links.self.href);
            }
        });
    }

    render() {
        const inputs = this.props.attributes.map((attribute, index) =>
            <div className="form-group row" key={index}>
                <label htmlFor={attribute} className="col-sm-4 col-form-label">{attribute}</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id={attribute} placeholder={attribute}/>
                </div>
            </div>
        );

        return(
            <form>
                <h4 className="title text-center">Create Fellowship</h4>
                <hr className="mb-md-4"/>
                {inputs}
                <div className="form-group row">
                    <div className="col">
                        <button type="submit" className="btn btn-success btn-block">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Create;