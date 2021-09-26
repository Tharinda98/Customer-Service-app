const WorkProgress=()=>{
    return(
        <div>
                                <div class="col-md-6 col-xl-12">
                                    <div class="card daily-sales">
                                        <div class="card-block">
                                            <h4 class="mb-4">Project Name</h4>
                                            <div class="row d-flex align-items-center">
                                                <div class="col-9">
                                                    <h3 class="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i> on going Project Phase</h3>
                                                </div>

                                                <div class="col-3 text-right">
                                                    <p class="m-b-0">Progress</p>
                                                </div>
                                            </div>
                                            <div class="progress m-t-30" style={{height: "7px"}}>
                                                <div class="progress-bar progress-c-theme" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        </div>
    )
}
export default WorkProgress;