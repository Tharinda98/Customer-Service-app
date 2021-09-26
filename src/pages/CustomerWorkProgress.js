import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import WorkProgress from "../components/customerComponents/WorkProgress";

const CustomerWorkProgress=()=>{
    return(
        <div>
            <NavBarCustomer/>
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <WorkProgress/>
                            <WorkProgress/>
                            <WorkProgress/>
                            <WorkProgress/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerWorkProgress;