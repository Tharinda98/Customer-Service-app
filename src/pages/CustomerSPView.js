import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import {Link} from 'react-router-dom';
import CustomerReviewCard from "../components/customerComponents/CustomerReviewCard";

const CustomerSPView=()=>{
    return(
        <div>
            <NavBarCustomer/>

            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div className="row">

                                <div>
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 0px 35px'}}>
                                            <div className="card-header">
                                                <h5>Profile</h5>
                                            </div>
                                            <div>
                                                <img src="/assets/images/user/profile.jpg" alt="" style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}/> 
                                            </div>
                                            <hr/>
                                            <div style={{ margin:'15px',display:'flex'}}>
                                                <Link  className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#5e8d25',borderColor:'#5e8d25'}}>
                                                    
                                                    Rate  
                                                </Link>
                                                <Link to="#" className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#038fcf'}}>
                                                    Schedule Work
                                                    
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                                    <h6 class="align-items-center float-left"><i class="fas fa-star f-10 m-r-10 text-c-yellow"></i>5</h6>
                                                    <h6 class="align-items-center float-right">384</h6>
                                                    <div class="progress m-t-30 m-b-20" style={{height: "6px"}}>
                                                        <div class="progress-bar progress-c-theme" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                    </div>
                                    
                                </div>



                                <div className="col-xl-8">
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>title</h5>
                                            </div>

                    
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Services:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        First Service 
                                
                                                        <hr/>
                                                        First Service 
                                                        <hr/>
                                                        First Service 
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>
                                                <hr/>
                        
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Districts:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        <div>
                                                            2 <hr/>
                                                            A,B,C,D <hr/>
                                                        </div>
                                                        
                                                    </div>
                                                </div>

                                            </div>
                   
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-xl-11">
                                    <div className="card yearly-sales">
                                        <div className="card-block">
                                            <div className="card-header">
                                                <h5>Customer Reviews</h5>
                                            </div>
                                            <CustomerReviewCard/>
                                            <CustomerReviewCard/>
                                            <CustomerReviewCard/>
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
export default CustomerSPView;