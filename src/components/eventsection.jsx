import React from 'react'
import event from "../components/event_data.jsx";
import "../styles/eventsection.css"
import { Link } from 'react-router-dom';
const eventsection = () => {
  return (
    <>
    <div style={{padding:" 4rem 0"}}>

      <div class="container-fluid py-5">
        <div class="row">
          <div class="col-lg-12">

            <div class="horizontal-timeline">

              <ul class="list-inline items">
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-info">{event.Github.day}</div>
                    <h5 class="pt-2">{event.Github.name}</h5>
                    <p class="text-muted">{event.Github.description}</p>
                    <div>
                      <Link to={'https://www.linkedin.com/posts/mlsc-mmcoe_techevent-microsoftazure-github-activity-7095450505966960640-OTSX?utm_source=share&utm_medium=member_desktop'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-success">{event.Cloud.day}</div>
                    <h5 class="pt-2">{event.Cloud.name}</h5>
                    <p class="text-muted">{event.Cloud.description}</p>
                    <div>
                      <Link to={'https://learn.microsoft.com/en-us/training/challenges?id=0cd5e2d0-2c60-46a4-8a8d-049a28c93700&wt.mc_id=studentamb_263719'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-danger">{event['Dexterity: Interlock'].day} </div>
                    <h5 class="pt-2">{event['Dexterity: Interlock'].name}</h5>
                    <p class="text-muted">{event['Dexterity: Interlock'].description}</p>
                    <div>
                      <Link to={'https://www.linkedin.com/posts/mlsc-mmcoe_interlock2023-codingchallenge-microsoftlearnstudentsclub-activity-7126510805092605952-3zR7?utm_source=share&utm_medium=member_desktop'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-warning">{event['Dashboard Dynamics'].day}</div>
                    <h5 class="pt-2">{event['Dashboard Dynamics'].name}</h5>
                    <p class="text-muted">{event['Dashboard Dynamics'].description} <a href='https://www.linkedin.com/in/anthony-byansi-7a027222a/'>Anthony Byansi</a></p>
                    <div>
                      <Link to={'https://www.linkedin.com/posts/mlsc-mmcoe_dataanalytics-powerbi-careeropportunities-activity-7164630855905075200-CoXi?utm_source=share&utm_medium=member_desktop'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
              </ul>

            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default eventsection