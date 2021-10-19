import React from 'react';
import './Department.css'
import logo1 from './../../icon//urology_vectorized.png'
import logo2 from './../../icon/s_neurosurgery_icon_vectorized.png'
import logo3 from './../../icon/podbean_icon_7_vectorized.png'
import logo4 from './../../icon/Hematology-512_vectorized.png'
import logo5 from './../../icon/gestro_vectorized.png'
import logo6 from './../../icon/download_vectorized.png'
import logo7 from './../../icon/doctor_icon_3-1.png'
import logo8 from './../../icon/doctor_icon_2.png'
import logo9 from './../../icon/doctor_icon_1.png'
import logo10 from './../../icon/c58f661d9d-e1563269878196.png'
import logo11 from './../../icon/Brain-Icon_vectorized.png'
import logo12 from './../../icon/73e4882e9d_vectorized.png'
import logo13 from './../../icon/1.png'
import logo14 from './../../icon/34_surgery-instruments-tools-512_vectorized.png'
import logo15 from './../../icon/1-2.png'
import logo16 from './../../icon/download-1_vectorized.png'
const Department = () => {
    return (
        <div>
            <div className="my-5 text-center container-fluid">
                <h1>Our Department</h1>
            </div>
            <div className='mx-auto row my-5 text-center container'>

                <div className="col-md-3">
                    <img src={logo9} alt="" />
                    <h4 className='departmentTitle'>Medicine</h4>
                    <p>The Department of Medicine is committed to setting the highest standards for patient care.</p>
                </div>
                <div className="col-md-3">
                    <img src={logo7} alt="" />
                    <h4 className='departmentTitle'>Dental</h4>
                    <p>We believe a patient is an individual to be cared for, not a (dental) condition to be treated.</p>
                </div>
                <div className="col-md-3"><img src={logo8} alt="" />
                    <h4 className='departmentTitle'>Cardiology</h4>
                    <p>Our cardiology department is highly dedicated exclusively to patients.</p>
                </div>

                <div className="col-md-3">
                    <img src={logo1} alt="" />
                    <h4 className='departmentTitle'>Urology</h4>
                    <p>Our highly skilled urologic surgeons bring their expertise and advanced procedures to residents of Sylhet.</p>
                </div>
                <div className="col-md-3">
                    <img src={logo2} alt="" />
                    <h4 className='departmentTitle'>Neuro Surgery</h4>
                    <p>Our Neurosurgery team includes surgeons, nurse practitioners and nurses who provide expert, individualized care.</p>
                </div>
                <div className="col-md-3"> <img src={logo3} alt="" />
                    <h4 className='departmentTitle'>Gynocology</h4>
                    <p>The Department of Gynecology treats and investigates the female reproductive organs.</p>
                </div>
                <div className="col-md-3"> <img src={logo4} alt="" />
                    <h4 className='departmentTitle'>Hematology</h4>
                    <p>Our hematology expertise is unmatched in the Sylhet and throughout the region.</p>
                </div>

                <div className="col-md-3"><img src={logo5} alt="" />
                    <h4 className='departmentTitle'>Gastroenterology</h4>
                    <p>We treat patients with liver diseases and gastrointestinal diseases.</p></div>
                <div className="col-md-3"><img src={logo6} alt="" />
                    <h4 className='departmentTitle'>ENT</h4>
                    <p>Our Otolaryngologists, (ENT) provide a wide range of services specific to the ear, nose and throat</p></div>


                <div className="col-md-3"><img src={logo10} alt="" /><h4 className='departmentTitle'>Pediatrics</h4>
                    <p>Our paediatrics department is proud of their successful record in giving children a healthy start in life</p></div>
                <div className="col-md-3"><img src={logo11} alt="" />
                    <h4 className='departmentTitle'>Neurology</h4>
                    <p>We offer comprehensive and advanced treatment and care for patients with stroke.</p></div>
                <div className="col-md-3"><img src={logo12} alt="" /><h4 className='departmentTitle'>Orthopedics</h4>
                    <p>Our Orthopaedics doctor are fully capable in serving the best medical treatment.</p></div>

                <div className="col-md-3"><img src={logo13} alt="" /><h4 className='departmentTitle'>Physical Medicine</h4>
                    <p>Our Physical medicine and rehabilitation team treats nerve, muscle, and bone related injuries or illnesses that affect how you move and function.</p></div>
                <div className="col-md-3"><img src={logo14} alt="" /><h4 className='departmentTitle'>Surgery</h4>
                    <p>Our experience and volumes of treatment are considerable, providing a valuable base for development of new treatments and basic research</p></div>
                <div className="col-md-3"><img src={logo15} alt="" /><h4 className='departmentTitle'>Dermatology</h4>
                    <p>Our dermatology team is able to treat patients with state-of-the-art topical, light and systemic drug therapies.</p></div>
                <div className="col-md-3"><img src={logo16} alt="" /><h4 className='departmentTitle'>Nephrology</h4>
                    <p>As a leading Nephrology unit in the region, Mount Adora Hospital offers a full range of treatment options for patients.</p>
                </div>


            </div>
        </div>
    );
};

export default Department;