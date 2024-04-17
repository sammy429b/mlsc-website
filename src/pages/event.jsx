import React from 'react';
import event from "../components/event_data.jsx";

const Event = () => {
    return (
        <>
            <div className='bg-light w-100 h-100'>
                <div className='position-relative overflow-hidden p-4 '>
                    <h3 className='text-center mb-4' style={{ color: "#203960" }}>{event.Github.date}</h3>
                    <div class="border border-dark position-absolute   " style={{ left: "50%", height: '100vh' }}></div>
                    <div class="mb-8 d-flex justify-content-between align-items-center w-100 right-timeline">
                        <div class="col-1 " style={{ width: '41%' }}>
                            <img src={event.Github.img} width="100%em" alt="" />
                        </div>
                        <div class="d-flex  justify-content-center align-items-center col-1 shadow-lg rounded-circle " style={{ width: "2.5rem", height: "2.5rem", zIndex: '2', background: "#e2e8f0" }}>
                            <img src={event.Github.eventlogo} width="30rem" alt="" />
                        </div>
                        <div class="col-1 bg-light rounded shadow-lg px-4 py-4 " style={{ width: "41%", }}>
                            <h3 class="mb-3 fw-bolder fs-3" style={{ color: "#203960" }}>{event.Github.name}</h3>
                            <p class="fs-6 " style={{ lineHeight: "24px", letterSpacing: "0.025em" }}>
                                Github and azure backpack was a workshop conducted by the club to introduce the students to the basics of Azure and Github. This was a great opportunity for the students to learn about the basics of Azure and Github.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='position-relative overflow-hidden p-4 mb-4'>
                    <h3 className='text-center mb-4'>{event.Cloud.date}</h3>
                    <div class="border border-primary position-absolute   " style={{ left: "50%", height: '100vh' }}></div>
                    <div class="mb-8 d-flex flex-row-reverse justify-content-between align-items-center w-100 right-timeline">
                        <div class="col-1 " style={{ width: '41%' }}>
                            <img src={event.Cloud.img} width="100%em" alt="" />
                        </div>
                        <div class="d-flex  justify-content-center align-items-center col-1 shadow-lg rounded-circle " style={{ width: "2.5rem", height: "2.5rem", zIndex: '2', background: "#e2e8f0" }}>
                            <img src={event.Cloud.eventlogo} width="30rem" alt="" />
                        </div>
                        <div class="col-1 bg-light rounded shadow-lg px-4 py-4 " style={{ width: "41%", }}>
                            <h3 class="mb-3 fw-bolder fs-3" style={{ color: "#203960" }}>{event.Cloud.name}</h3>
                            <p class="fs-6 " style={{ lineHeight: "24px", letterSpacing: "0.025em" }}>
                                Cloud Skill Challenge was a learning based event on cloud skills hosted on Microsoft Learn's platform. The event received a great response from over 100+ participants.
                            </p>
                        </div>
                    </div>

                </div>


                <div className='position-relative overflow-hidden p-4 '>
                    <h3 className='text-center mb-4' style={{ color: "#203960" }}>{event['Dexterity: Interlock'].date}</h3>
                    <div class="border border-dark position-absolute   " style={{ left: "50%", height: '100vh' }}></div>
                    <div class="mb-8 d-flex justify-content-between align-items-center w-100 right-timeline">
                        <div class="col-1 " style={{ width: '41%' }}>
                            <img src={event['Dexterity: Interlock'].img} width="100%em" alt="" />
                        </div>
                        <div class="d-flex  justify-content-center align-items-center col-1 shadow-lg rounded-circle " style={{ width: "2.5rem", height: "2.5rem", zIndex: '2', background: "#e2e8f0" }}>
                            <img src={event['Dexterity: Interlock'].eventlogo} width="30rem" alt="" />
                        </div>
                        <div class="col-1 bg-light rounded shadow-lg px-4 py-4 " style={{ width: "41%", }}>
                            <h3 class="mb-3 fw-bolder fs-3" style={{ color: "#203960" }}>{event['Dexterity: Interlock'].name}</h3>
                            <p class="fs-6 " style={{ lineHeight: "24px", letterSpacing: "0.025em" }}>Dexterity 2023, an annual fest of MMCOE conducted a fun challenge event for the students. The event was a huge success with over 120+ participants. 
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='position-relative overflow-hidden p-4 mb-4'>
                    <h3 className='text-center mb-4'>{event['Dashboard Dynamics'].date}</h3>
                    <div class="border border-primary position-absolute   " style={{ left: "50%", height: '100vh' }}></div>
                    <div class="mb-8 d-flex flex-row-reverse justify-content-between align-items-center w-100 right-timeline">
                        <div class="col-1 " style={{ width: '41%' }}>
                            <img src={event['Dashboard Dynamics'].img} width="100%" alt="" />
                        </div>
                        <div class="d-flex  justify-content-center align-items-center col-1 shadow-lg rounded-circle " style={{ width: "2.5rem", height: "2.5rem", zIndex: '2', background: "#e2e8f0" }}>
                            <img src={event['Dashboard Dynamics'].eventlogo} width="24rem" alt="" />
                        </div>
                        <div class="col-1 bg-light rounded shadow-lg px-4 py-4 " style={{ width: "41%", }}>
                            <h3 class="mb-3 fw-bolder fs-3" style={{ color: "#203960" }}>{event['Dashboard Dynamics'].name}</h3>
                            <p class="fs-6 " style={{ lineHeight: "24px", letterSpacing: "0.025em" }}>
                                Dashboard Dynamics was one of our most ambitious events. The event was conducted in collaboration with <a href="https://www.linkedin.com/in/anthony-byansi-7a027222a/">Anthony Byansi</a>. The event was a hands on workshop on Business Intelligence with Power BI.
                            </p>
                        </div>
                    </div>

                </div>


        </>
    )
}

export default Event;
