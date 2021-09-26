

const SPCard=({SP_name,SP_field,SP_location,SP_rating})=>{

    return(
        <div>
                                <div class="col-xl-12">
                                    <div class="card card-social">
                                        <div class="card-block border-bottom">
                                          
                                                <div class="row align-items-center justify-content-right card-active">

                                                    <div  class="col-xl-6" >
                                                        <div>
                                                            <h4>{SP_name}</h4>
                                                            <h6> <span class="text-muted">{SP_field}</span></h6>
                                                            <br/>
                                                            <div class="row d-flex">
                                                                <div class="col">
                                                                    <span class="d-block text-uppercase"><i class="feather icon-map-pin  text-c-blue"></i>{SP_location}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div  class="col-xl-6" > 
                                                        <img class="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/>
                                                        
                                                    </div>
                                                    
                                                    
                                                </div>    
                                            
                                        </div>
                                        <div class="card-block">
                                            <div class="row align-items-center justify-content-center card-active">
                                                <div class="col-xl-6">
                                                    <h6 class="text-center m-b-10"><span class="text-muted m-r-5">Ratings</span>{SP_rating}</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-c-theme" role="progressbar" style={{width:"60%",height:"6px"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <a href="/CustomerSPView" class="nav-link ">
                                                    <button type="button" class="btn btn-outline-dark align-justify" title="btn btn-outline-dark" data-toggle="tooltip" style={{fontSize:"10px"}}>View Profile</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>            

        </div>
    )
}
export default SPCard;