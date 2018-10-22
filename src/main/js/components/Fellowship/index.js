import React from 'react';

class Fellowship extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row my-md-3">
        <div className="col-7">
          <table className="table table-striped table-hover table-sm">
            <thead className="thead-light">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body pb-0">
              <h4 className="title text-center">Add Fellowship</h4>
              <hr className="mb-md-4"/>
              <form>
                <div className="form-group row">
                  <label htmlFor="firstName" className="col-sm-4 col-form-label">Firstname</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="firstName" placeholder="Input firstname..."/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="lastName" className="col-sm-4 col-form-label">Lastname</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="lastName" placeholder="Input lastname..."/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="descriptions" className="col-sm-4 col-form-label">Descriptions</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="descriptions" placeholder="Input descriptions..."/>
                  </div>
                </div>
                <div className="form-group row">
                  <button type="submit" className="btn btn-success btn-block mx-3 mt-md-2">
                    <i className="la la-plus"/>
                    Add Fellow
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Fellowship;