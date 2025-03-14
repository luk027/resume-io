import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ResumeContext } from "../context/ResumeContext";
import { useContext } from "react";

const ResumeTemplate = () => {
    const {resumeInfo} = useContext(ResumeContext);
    return (
        <div className='bg-white'>
            <hr className="h-4  bg-gray-300 border-0"></hr>

            <main className="m-4 p-4 font-sans">

                {/* header  */}
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <h1 className='text-2xl font-semibold tracking-tight  text-gray-900 sm:text-3xl'>{resumeInfo?.personalInfo?.name}</h1>
                        <span className='text-base font-medium text-gray-500'>{resumeInfo?.personalInfo?.jobTitle}</span>
                    </div>
                    <div>
                        <div className="flex justify-end items-center gap-3 mb-1 text-xs">
                            <div className="font-semibold text-gray-500">{resumeInfo?.personalInfo?.phone}</div>
                            <div className="bg-gray-700 p-1.5 rounded-full text-white"><IoMdCall /></div>
                        </div>
                        <div className="flex justify-end items-center gap-3 mb-1 text-xs">
                            <div className="font-semibold text-gray-500">{resumeInfo?.personalInfo?.email}</div>
                            <div className="bg-gray-700 p-1.5 rounded-full text-white"><MdAlternateEmail /></div>
                        </div>
                        <div className="flex justify-end items-center gap-3 mb-1 text-xs">
                            <div className="font-semibold text-gray-500">{resumeInfo?.personalInfo?.linkedIn}</div>
                            <div className="bg-gray-700 p-1.5 rounded-full text-white"><FaLinkedinIn /></div>
                        </div>
                        <div className="flex justify-end items-center gap-3 text-xs">
                            <div className="font-semibold text-gray-500">{resumeInfo?.personalInfo?.place}</div>
                            <div className="bg-gray-700 p-1.5 rounded-full text-white"><FaLocationDot /></div>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 "></hr>

                {/* Career Objective  */}
                <div>
                    <span className='text-base font-semibold text-gray-900'>
                        CAREER OBJECTIVE
                    </span>
                    <hr className="h-px mb-1 border-0"></hr>

                    <div className="text-sm leading-4 md:leading-5 text-justify  text-gray-500">
                        {resumeInfo?.personalInfo?.careerObjective}
                    </div>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 "></hr>

                {/* Education */}
                <div>
                    <span className='text-base font-semibold text-gray-900'>
                        EDUCATION
                    </span>
                    {
                        resumeInfo?.education.map((info, index) => (
                            <div key={index}>
                                <hr className="h-px mb-2 border-0 "></hr>

                                <div className="flex flex-col text-sm leading-4 md:leading-5">
                                    <div className="flex justify-between items-center font-semibold text-gray-900">
                                        <div>{info?.degree}</div>
                                        <div>{info?.startYear} - {info?.endYear}</div>
                                    </div>
                                    <div className="text-justify  text-gray-500">
                                        {info?.collage}
                                    </div>
                                    <div className="text-justify  text-gray-500">
                                        CGPA: {info?.cgpa}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 "></hr>

                {/* Worke Experience */}
                <div>
                    <span className='text-base font-semibold text-gray-900'>
                        WORKE EXPERIENCE
                    </span>
                    {
                        resumeInfo?.workExperience.map((info, index) => (
                            <div key={index}>
                                <hr className="h-px mb-2 border-0 "></hr>
                                <div className="flex flex-col mb-4 text-sm">
                                    <div className="flex justify-between items-center font-semibold text-gray-900">
                                        <div>{info?.jobTitle},
                                            <br /> {info?.company}</div>
                                        <div>{info?.startYear} - {info?.endYear}</div>
                                    </div>
                                    <div className="text-justify  text-gray-500">
                                        {info?.place}
                                        {/* <div className="leading-5 list-outside">
                                            {
                                                info?.workSummary
                                            }
                                        </div> */}
                                        <div className="leading-4 md:leading-5 list-outside" dangerouslySetInnerHTML={{ __html: info?.workSummary }} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }     
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 "></hr>

                {/* skills */}
                <div>
                    <span className='text-base font-semibold text-gray-900'>
                        SKILLS
                    </span>
                    <hr className="h-px mb-1 border-0 "></hr>
                    <div className="grid grid-cols-2 leading-5 text-justify  text-gray-500">
                        {
                           
                            resumeInfo?.skills.map((info, index) => (
                                <li key={index}>
                                    {info?.skill}
                                </li>
                            ))
                        }
                    </div>
                </div>

            </main>
        </div>
    )
}

export default ResumeTemplate