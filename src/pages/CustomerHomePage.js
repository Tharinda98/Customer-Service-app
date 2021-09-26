import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import SPCard from "../components/customerComponents/SPCard";


const CustomerHomePage=()=>{
    return(
        <div>
            <NavBarCustomer/>
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <div class="row">
                                        
                                            <SPCard SP_name={"Tharinda"} SP_field={"Plumbing"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"Tharinda"} SP_field={"Plumbing"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"Tharinda"} SP_field={"Plumbing"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"Tharinda"} SP_field={"Plumbing"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"Tharinda"} SP_field={"Plumbing"} SP_location={"Kalutara"} SP_rating={"4.7"}/>

                                        
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

export default CustomerHomePage;