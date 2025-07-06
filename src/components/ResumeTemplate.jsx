import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ResumeContext } from "../context/ResumeContext";
import { useContext } from "react";

const ResumeTemplate = () => {
    const {resumeInfo} = useContext(ResumeContext);
    
    const formatPhone = (phone) => {
        if (!phone) return '';
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-4xl mx-auto bg-white">
                {/* Header */}
                <div className="px-6 py-4 border-b-2 border-blue-600">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {resumeInfo?.personalInfo?.name || 'Your Name'}
                            </h1>
                            <p className="text-lg font-medium text-blue-700">
                                {resumeInfo?.personalInfo?.jobTitle || 'Professional Title'}
                            </p>
                        </div>
                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-3 items-center text-sm">
                            <div className="flex items-center gap-1 text-blue-700">
                                <IoMdCall className="w-3 h-3" />
                                <span>{formatPhone(resumeInfo?.personalInfo?.phone) || 'Phone'}</span>
                            </div>
                            <div className="flex items-center gap-1 text-blue-700">
                                <MdAlternateEmail className="w-3 h-3" />
                                <span>{resumeInfo?.personalInfo?.email || 'Email'}</span>
                            </div>
                            <div className="flex items-center gap-1 text-blue-700">
                                <FaLinkedinIn className="w-3 h-3" />
                                <span>{resumeInfo?.personalInfo?.linkedIn || 'LinkedIn'}</span>
                            </div>
                            <div className="flex items-center gap-1 text-blue-700">
                                <FaLocationDot className="w-3 h-3" />
                                <span>{resumeInfo?.personalInfo?.place || 'Location'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-4 space-y-4">
                    {/* Career Objective */}
                    {resumeInfo?.personalInfo?.careerObjective && (
                        <section>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1 h-4 bg-blue-600"></div>
                                <h2 className="uppercase tracking-wide text-sm font-bold text-gray-800">Career Objective</h2>
                            </div>
                            <div className="text-gray-700 text-sm leading-relaxed pl-3">
                                {resumeInfo.personalInfo.careerObjective}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {resumeInfo?.education && resumeInfo.education.length > 0 && (
                        <section>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1 h-4 bg-blue-600"></div>
                                <h2 className="uppercase tracking-wide text-sm font-bold text-gray-800">Education</h2>
                            </div>
                            <div className="space-y-3 pl-3">
                                {resumeInfo.education.map((info, index) => (
                                    <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900">
                                                {info?.degree || 'Degree'}
                                            </h3>
                                            <p className="text-sm text-gray-700">
                                                {info?.collage || 'Institution'}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                CGPA: {info?.cgpa || 'N/A'}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-medium text-blue-600">
                                                {info?.startYear || 'Start'} - {info?.endYear || 'End'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Work Experience */}
                    {resumeInfo?.workExperience && resumeInfo.workExperience.length > 0 && (
                        <section>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1 h-4 bg-blue-600"></div>
                                <h2 className="uppercase tracking-wide text-sm font-bold text-gray-800">Work Experience</h2>
                            </div>
                            <div className="space-y-3 pl-3">
                                {resumeInfo.workExperience.map((info, index) => (
                                    <div key={index} className="flex flex-col md:flex-row md:items-start md:justify-between">
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                                                <h3 className="text-sm font-semibold text-gray-900">
                                                    {info?.jobTitle || 'Job Title'}
                                                </h3>
                                                <span className="text-xs font-medium text-blue-600">
                                                    {info?.startYear || 'Start'} - {info?.endYear || 'End'}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 mb-1">
                                                {info?.company || 'Company Name'}
                                            </p>
                                            <p className="text-xs text-gray-500 mb-2">
                                                {info?.place || 'Location'}
                                            </p>
                                            <div className="text-gray-700 text-xs leading-relaxed">
                                                <div 
                                                    className="prose prose-xs max-w-none"
                                                    dangerouslySetInnerHTML={{ __html: info?.workSummary || '' }} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {resumeInfo?.skills && resumeInfo.skills.length > 0 && (
                        <section>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1 h-4 bg-blue-600"></div>
                                <h2 className="uppercase tracking-wide text-sm font-bold text-gray-800">Skills</h2>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-3">
                                {resumeInfo.skills.map((info, index) => (
                                    <span key={index} className="inline-block bg-blue-50 text-blue-700 px-2 py-1 text-xs font-medium border border-blue-200">
                                        {info?.skill || 'Skill'}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-2 text-center border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                        Generated with ❤️ by Resume.io
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResumeTemplate