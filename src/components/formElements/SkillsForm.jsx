import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const SkillsForm = () => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeContext);

    const handleChange = (event, value) => {
        console.log('val->',value)
        setResumeInfo(prevResumeInfo => ({
            ...prevResumeInfo,
            skills: value
        }));
    }

    return (
        <div className='mb-4 bg-white p-4 rounded shadow'>
            <span className='text-indigo-600 text-xl font-bold'>Add Skills</span>
            <form className="max-w-md mx-auto mt-2 mb-1">

                <Autocomplete className='focus:border-indigo-600'
                    onChange={(event, value) => handleChange(event, value)}
                    multiple
                    id="tags-outlined"
                    options={topSkills}
                    getOptionLabel={(option) => option.skill}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Select Your Skills"
                            placeholder="Skills"
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#3949ab",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#3949ab",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#3949ab",
                                },
                            }}
                        />
                    )}
                />
            </form>
        </div>
    )
}

export default SkillsForm

const topSkills = [
    { skill: "Java" },
    { skill: "Python" },
    { skill: "C++" },
    { skill: "JavaScript" },
    { skill: "C#" },
    { skill: "Ruby" },
    { skill: "Swift" },
    { skill: "PHP" },
    { skill: "Go" },
    { skill: "Kotlin" },
    { skill: "TypeScript" },
    { skill: "R" },
    { skill: "MATLAB" },
    { skill: "SQL" },
    { skill: "Perl" },
    { skill: "Data Analysis" },
    { skill: "Machine Learning" },
    { skill: "Data Visualization" },
    { skill: "Statistical Modeling" },
    { skill: "Data Mining" },
    { skill: "Predictive Analytics" },
    { skill: "Business Intelligence" },
    { skill: "Data Warehousing" },
    { skill: "Big Data" },
    { skill: "Artificial Intelligence" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "React" },
    { skill: "Angular" },
    { skill: "Vue.js" },
    { skill: "Node.js" },
    { skill: "Ruby on Rails" },
    { skill: "Django" },
    { skill: "Flask" },
    { skill: "WordPress" },
    { skill: "Amazon Web Services (AWS)" },
    { skill: "Microsoft Azure" },
    { skill: "Google Cloud Platform (GCP)" },
    { skill: "Cloud Security" },
    { skill: "Cloud Architecture" },
    { skill: "Network Security" },
    { skill: "Cybersecurity Framework" },
    { skill: "Penetration Testing" },
    { skill: "Vulnerability Assessment" },
    { skill: "Incident Response" },
    { skill: "MySQL" },
    { skill: "MongoDB" },
    { skill: "PostgreSQL" },
    { skill: "Oracle" },
    { skill: "Microsoft SQL Server" },
    { skill: "Agile Methodologies" },
    { skill: "Scrum" },
    { skill: "Waterfall" },
    { skill: "Project Planning" },
    { skill: "Risk Management" },
    { skill: "Team Management" },
    { skill: "Leadership" },
    { skill: "Public Speaking" },
    { skill: "Written Communication" },
    { skill: "Time Management" },
    { skill: "SEO" },
    { skill: "Social Media Marketing" },
    { skill: "Content Marketing" },
    { skill: "Email Marketing" },
    { skill: "PPC Advertising" },
    { skill: "Adobe Creative Suite" },
    { skill: "Graphic Design Principles" },
    { skill: "Visual Design" },
    { skill: "UI/UX Design" },
    { skill: "Branding" },
    { skill: "Network Architecture" },
    { skill: "Network Administration" },
    { skill: "Wi-Fi" },
    { skill: "LAN/WAN" },
    { skill: "Windows" },
    { skill: "Linux" },
    { skill: "macOS" },
    { skill: "Unix" },
    { skill: "Chrome OS" },
    { skill: "Financial Analysis" },
    { skill: "Accounting" },
    { skill: "Business Strategy" },
    { skill: "Marketing Strategy" },
    { skill: "Entrepreneurship" },
    { skill: "Problem-Solving" },
    { skill: "Adaptability" },
    { skill: "Critical Thinking" },
    { skill: "Creativity" },
    { skill: "Emotional Intelligence" },
    { skill: "Conflict Resolution" },
    { skill: "Negotiation" },
    { skill: "Active Listening" },
    { skill: "Empathy" },
    { skill: "Continuous Learning" },
    { skill: "Foreign Language (e.g., Spanish, Mandarin)" },
    { skill: "Geographic Information Systems (GIS)" },
    { skill: "Computer-Aided Design (CAD)" },
    { skill: "Video Editing" },
    { skill: "Photography" }
];





