import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const {_id, title, company, company_logo, applicationDeadline, requirements, description, location, salaryRange} = useLoaderData();
  return (
    <div>
      <h2>Job Details For {title}</h2>
      <p>Apply For: {company}</p>
      <p>Deadline: {applicationDeadline}</p>
      <Link to={`/jobApply/${_id}`}>
      <button className='btn btn-primary'>Apply Now</button>
      </Link>
    </div>
  )
}

export default JobDetails
