import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.pilihBaris = this.pilihBaris.bind(this);
    }

    async pilihBaris() {
        if (this.props.id !== this.props.baris &&
            await this.props.form === "create") {
            await this.props.barisAktif(this.props.id);
            await this.props.setEmployee(this.props.employee);
            await this.props.gantiForm("update");
        } else if (this.props.id !== this.props.baris &&
            await this.props.form === "update") {
            await this.props.barisAktif("");
            await this.props.gantiForm("create");
            await this.props.barisAktif(this.props.id);
            await this.props.setEmployee(this.props.employee);
            await this.props.gantiForm("update");
        } else {
            await this.props.barisAktif("");
            await this.props.gantiForm("create");
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