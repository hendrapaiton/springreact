import React from 'react';

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.employee["firstName"],
            lastName: this.props.employee["lastName"],
            descriptions: this.props.employee["descriptions"]
        }
        this.updateEntity = this.updateEntity.bind(this);
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
                        <button type="submit" className="btn btn-danger btn-block">
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