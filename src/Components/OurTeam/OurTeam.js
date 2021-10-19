import React from 'react';
import './OurTeam.css'
const OurTeam = () => {
    return (
        <div>
            <h1 className=" text-center fw-bolder text-success my-5 ">Our Specialized Doctors</h1>
            <div className="row container mx-auto my-5">
                <div className="col-md-4 my-3  p-2 div div div">
                    <img className='img-fluid doctorsImg doctorsImg' src="https://image.freepik.com/free-photo/happy-medical-team-hospital_1098-491.jpg" alt="" />
                    <h2>Dr. Mujammel Hoque </h2>
                    <i>Specialized in ENT</i>
                </div>

                <div className="col-md-4 my-3  p-2 div">
                    <img className='img-fluid doctorsImg' src="https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" alt="" />
                    <h2>Dr. Aymaan Al Wafi</h2>
                    <i>Specialized in Neurology</i>
                </div>
                <div className="col-md-4 my-3  p-2 div">
                    <img className='img-fluid doctorsImg' src="https://image.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg" alt="" />
                    <h2>Dr. Saleh Muhammod </h2>
                    <i>Specialized in Medicine</i>
                </div>
                <div className="col-md-4 my-5  p-2 div">
                    <img className='img-fluid doctorsImg' src="https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg" alt="" />
                    <h2>Dr. Kawsar Muhammod</h2>
                    <i>Specialized in Orthopedic Surgery</i>
                </div>
                <div className="col-md-4 my-5  p-2 div">
                    <img className='img-fluid doctorsImg' src="https://image.freepik.com/free-photo/healthcare-workers-medical-insurance-pandemic-covid-19-concept-friendly-hispanic-doctor-white-coat-stethoscope-guarantee-good-quality-ppe-advice-use-medical-masks-during-coronavirus_1258-58562.jpg" alt="" />
                    <h2>Dr. Tanvir Ahmed</h2>
                    <i>Specialized in NERO Surgery</i>
                </div>
                <div className="col-md-4 my-5  p-2 div">
                    <img className='img-fluid doctorsImg' src="https://image.freepik.com/free-photo/close-up-doctor-kid-wearing-masks_23-2148868116.jpg" alt="" />
                    <h2>Dr.  Muhibullah Muhsin</h2>
                    <i>Specialized in ENT & Head Neck Surgery</i>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;