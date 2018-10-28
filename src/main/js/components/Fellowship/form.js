import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
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
                {inputs}
                <div className="form-group row">
                    <div className="col">
                        <button type="submit" className="btn btn-danger btn-block">
                            Delete
                        </button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-success btn-block">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;