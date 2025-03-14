import { useContext, useEffect, useState } from "react"
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import RichTextEditor from "./RichTextEditor";
import { ResumeContext } from '../../context/ResumeContext';

const WorkExpForm = () => {
 
    const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    const formField = {
        jobTitle: "",
        company: "",
        startYear: "",
        endYear: "",
        place: "",
        workInfo: ""
    }

    const [experienceList, setExperienceList] = useState([
        formField
    ])

    const [count, setCount] = useState(1);

    const addNewExperience = () => {
        setExperienceList([...experienceList, formField])
        setCount(prev => prev + 1);
    }
    const removePreviousExperience = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
            setExperienceList(experienceList => experienceList.slice(0, -1));
        }
    }

    const handleChange = (index, event) => {
        const newEntries = experienceList.map((entry, i) => {
            if (i === index) {
                return { ...entry, [event.target.name]: event.target.value };
            }
            return entry;
        });
        // console.log(newEntries);
        setExperienceList(newEntries);
    };

    const handleDataFromTextEditor = (e,name,index) => {
        const newEntries = experienceList.map((entry, i) => {
            if (i === index) {
                return { ...entry, [name]: e.target.value };
            }
            return entry;
        });
        // console.log(newEntries);
        setExperienceList(newEntries);
    }

    // console.log(experienceList)

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            workExperience: experienceList
        });
    }, [experienceList])

    // useEffect(() => {
    //     setResumeInfo(prevResumeInfo => ({
    //         ...prevResumeInfo,
    //         workExperience: experienceList
    //     }));
    // }, [experienceList])

    return (
        <div className='mb-4 bg-white p-4 rounded shadow'>
            <span className='text-indigo-600 text-xl font-bold'>Work Experience</span>
            {
                experienceList?.map((item, index) => (
                    <form key={index} className="max-w-md mx-auto mt-2 mb-1">

                        {/* Devider line  */}
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-1 my-8 bg-indigo-400 border-0 rounded-sm " />
                            <div className="absolute px-4 -translate-x-1/2 bg-indigo-400 text-white left-1/2 rounded-sm">
                                {index + 1}
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(event) => handleChange(index, event)} name="jobTitle" id="jobTitle" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                            <label htmlFor="jobTitle" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(event) => handleChange(index, event)} name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                            <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(event) => handleChange(index, event)} name="place" id="place" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                            <label htmlFor="place" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Place</label>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="number" onChange={(event) => handleChange(index, event)} name="startYear" id="startYear" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                                <label htmlFor="startYear" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start (Year)</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="number" onChange={(event) => handleChange(index, event)} name="endYear" id="endYear" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                                <label htmlFor="endYear" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End (Year)</label>
                            </div>
                        </div>
                        <div>
                            <RichTextEditor sendDataToParent={(event) => handleDataFromTextEditor(event,"workSummary",index)} />
                        </div>
                        {/* <hr className="w-48 h-1 mx-auto my-2 bg-indigo-400 border-0 rounded-sm md:my-5" /> */}
                    </form>
                ))
            }

            <div className='flex justify-end gap-2 text-white text-2xl cursor-pointer'>
                <div className='flex justify-center bg-indigo-400 items-center px-2 rounded hover:bg-indigo-600'
                    onClick={addNewExperience}>
                    <span><IoMdAdd /></span>
                    <span className='text-lg font-mono'>Add</span>
                </div>
                {
                    count > 1 ? (
                        <div className='flex justify-center bg-indigo-400 items-center px-2 rounded hover:bg-indigo-600'
                            onClick={removePreviousExperience}>
                            <span><IoMdRemove /></span>
                            <span className='text-lg font-mono'>Remove</span>
                        </div>
                    ) : null
                }
            </div>

        </div>
    )
}

export default WorkExpForm