import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import {
  HiUser,
  HiBriefcase,
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiGlobe,
} from "react-icons/hi";

const PersonalInfoFrom = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prevResumeInfo) => ({
      ...prevResumeInfo,
      personalInfo: {
        ...prevResumeInfo.personalInfo,
        [name]: value,
      },
    }));
  };

  const inputFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      icon: <HiUser className="w-5 h-5" />,
      required: true,
    },
    {
      name: "jobTitle",
      label: "Job Title",
      type: "text",
      placeholder: "e.g., Software Engineer",
      icon: <HiBriefcase className="w-5 h-5" />,
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "123-456-7890",
      icon: <HiPhone className="w-5 h-5" />,
      required: true,
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@example.com",
      icon: <HiMail className="w-5 h-5" />,
      required: true,
    },
    {
      name: "linkedIn",
      label: "LinkedIn Profile",
      type: "url",
      placeholder: "https://linkedin.com/in/yourprofile",
      icon: <HiGlobe className="w-5 h-5" />,
      required: false,
    },
    {
      name: "place",
      label: "Location",
      type: "text",
      placeholder: "City, State",
      icon: <HiLocationMarker className="w-5 h-5" />,
      required: true,
    },
  ];

  return (
    <div className="modern-card fade-in">
      <div className="modern-card-header">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <HiUser className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Personal Details
            </h3>
            <p className="text-sm text-gray-600">Tell us about yourself</p>
          </div>
        </div>
      </div>

      <div className="modern-card-body">
        <form className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inputFields.slice(0, 2).map((field) => (
              <div key={field.name} className="space-y-2">
                <label
                  htmlFor={field.name}
                  className="modern-label flex items-center space-x-2"
                >
                  <span className="text-gray-500">{field.icon}</span>
                  <span>{field.label}</span>
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={resumeInfo?.personalInfo?.[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  pattern={field.pattern}
                  className="modern-input focus-visible-ring"
                />
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inputFields.slice(2, 4).map((field) => (
              <div key={field.name} className="space-y-2">
                <label
                  htmlFor={field.name}
                  className="modern-label flex items-center space-x-2"
                >
                  <span className="text-gray-500">{field.icon}</span>
                  <span>{field.label}</span>
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={resumeInfo?.personalInfo?.[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  pattern={field.pattern}
                  className="modern-input focus-visible-ring"
                />
              </div>
            ))}
          </div>

          {/* Social & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inputFields.slice(4).map((field) => (
              <div key={field.name} className="space-y-2">
                <label
                  htmlFor={field.name}
                  className="modern-label flex items-center space-x-2"
                >
                  <span className="text-gray-500">{field.icon}</span>
                  <span>{field.label}</span>
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={resumeInfo?.personalInfo?.[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  pattern={field.pattern}
                  className="modern-input focus-visible-ring"
                />
              </div>
            ))}
          </div>

          {/* Career Objective */}
          <div className="space-y-2">
            <label htmlFor="careerObjective" className="modern-label">
              Career Objective
            </label>
            <textarea
              id="careerObjective"
              name="careerObjective"
              value={resumeInfo?.personalInfo?.careerObjective || ""}
              onChange={handleChange}
              rows="4"
              placeholder="Write a compelling career objective that highlights your goals and what you bring to potential employers..."
              className="modern-input focus-visible-ring resize-none"
            />
            <p className="text-xs text-gray-500">
              Keep it concise but impactful. 2-3 sentences work best.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoFrom;
