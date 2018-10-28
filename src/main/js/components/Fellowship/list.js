import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.pilihBaris = this.pilihBaris.bind(this);
    }

    pilihBaris() {
        if (this.props.id !== this.props.baris) {
            this.props.barisAktif(this.props.id);
        } else {
            this.props.barisAktif("");
        }
    }

    render() {
        return (
            <tr onClick={this.pilihBaris}
                className={this.props.id === this.props.baris ? "table-active": ""}>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }

}

export default List;