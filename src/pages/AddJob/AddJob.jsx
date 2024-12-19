import React from 'react'
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {

    const {user} = useAuth();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const {min , max, currency, ...newJob} = initialData;
        // console.log(newJob);
        newJob.salaryRange = {min, max, currency}
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                                Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "Job been added",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                                navigate('/myPostedJobs')
                            }
        })
    }
    return (
        <div>
            <h2 className='text-3xl'>Post a New Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Location Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type='text' name="location" placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* Application DeadLine */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type='date' name="applicationDeadline" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue="Pick a job type" className="select select-ghost w-full border">
                        <option disabled>Pick a job type</option>
                        <option>Full-Time</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>
                </div>
                {/* Job Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue="Pick a job Field" className="select select-ghost w-full bordered outline-1">
                        <option disabled>Pick a job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary Range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type='text' name="min" placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type='text' name="max" placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <select defaultValue="Currency" name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* Job Description*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className='textarea textarea-bordered' name="description" placeholder='Job Description' required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Comapny Name</span>
                    </label>
                    <input type='text' name="comapany" placeholder="Company Name" className="input input-bordered" required />
                </div>
                {/* Job Requirement*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className='textarea textarea-bordered' name="requirements" placeholder='Put each requiremnet in a new line' required></textarea>
                </div>
                {/* Job Responsibilities*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className='textarea textarea-bordered' name="responsibilities" placeholder='Write each requiremnet in a new line' required></textarea>
                </div>
                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type='email' defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type='text' name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* Company logo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Comapany Logo URL</span>
                    </label>
                    <input type='text' name="company_logo" placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* Submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddJob
