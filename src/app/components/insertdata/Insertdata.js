import React from 'react'

function Insertdata() {
  return (
    <div className='insertdata text-center'>
        <div className='container'>
            <form>
                <div className="row mx-3 my-3">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example3" className="form-control" placeholder='Consignment Number'/>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example4" className="form-control" placeholder='Goods Type'/>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="number" id="form8Example5" className="form-control" placeholder='Weight' />
                        </div>
                    </div>
                </div>
                <div className="row mx-3 my-3">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example3" className="form-control" placeholder='Sender Full Name' />
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="number" id="form8Example4" className="form-control" placeholder='Sender Contact'/>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example5" className="form-control" placeholder='Sender Address' />
                        </div>
                    </div>
                </div>
                <div className="row mx-3 my-3">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example3" className="form-control" placeholder='Receiver Full Name' />
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="number" id="form8Example4" className="form-control" placeholder='Receiver Contact'/>
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example5" className="form-control" placeholder='Receiver Address' />
                        </div>
                    </div>
                </div>
                <div className="row mx-3 my-3">
                    <div className="col-3">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example3" className="form-control" placeholder='Received' />
                        </div>
                    </div>
                    <div className="col-3">
                        <div data-mdb-input-init className="form-outline">
                            <input type="number" id="form8Example4" className="form-control" placeholder='Out for Delivery'/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form8Example5" className="form-control" placeholder='Estimated Delivery' />
                        </div>
                    </div>
                    <div className="col-3">
                        <div data-mdb-input-init className="form-outline">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Received</option>
                            <option value="2">Intransit</option>
                            <option value="3">Delivered</option>
                        </select>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary btn-lg btn-block'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Insertdata