import React from 'react'

function Consignmentform() {
  return (
            <div className="row mx-3 my-3">
                <div className="col">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form8Example3" className="form-control" placeholder='Consignment Number' />
                    </div>
                </div>
                <div className="col">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form8Example4" className="form-control" placeholder='Goods Type'/>
                    </div>
                </div>
                <div className="col">
                    <div data-mdb-input-init className="form-outline">
                        <input type="email" id="form8Example5" className="form-control" placeholder='Email' />
                    </div>
                </div>
            </div>
  )
}

export default Consignmentform