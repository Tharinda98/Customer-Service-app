
const RegForm=()=>{
    return(
        <div class="pcoded-main-container">
            <div class="pcoded-wrapper">
                <div class="pcoded-content">
                    <div class="pcoded-inner-content">
                        <div class="main-body">
                            <div class="page-wrapper">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card">
                                            <div class="card-header">
                                            <h5>Service Provider Details</h5>
                                            </div>
                                            <div class="card-body">
                                                <h5>Service Provider Name</h5>
                                                
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <form>
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail1">User Name</label>
                                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JET Constructions" readOnly/>
                                                           
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleInputPassword1">Field</label>
                                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Plumbing Work"/>
                                                        </div>
                                                        <div class="form-group form-check">
                                                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                            <label class="form-check-label" for="exampleCheck1">Checked By Admin</label>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary">Approve</button>
                                                        </form>
                                                    </div>
                                                    <div class="col-md-6">
                                                    <form>
                                                        <div class="form-group">
                                                            <label>District</label>
                                                            <input type="text" class="form-control" placeholder="Colombo"/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleFormControlSelect1">Profile Type</label>
                                                            <select class="form-control" id="exampleFormControlSelect1">
                                                                <option>Gold</option>
                                                                <option>Silver</option>
                                                                <option>Platinum</option>
                                                                <option>Free</option>
                                                                
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleFormControlTextarea1">Address</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="No.64,Jayamawatha,Colombo 4"></textarea>
                                                        </div>
                                                    </form>
                                                </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegForm;