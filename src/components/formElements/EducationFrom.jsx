import { useContext, useEffect, useState } from 'react';
import { ResumeContext } from '../../context/ResumeContext';
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";



const EducationFrom = () => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    const formField = {
        degree: "",
        collage: "",
        cgpa: "",
        startYear: "",
        endYear: ""
    }
    const [educationList, setEducationList] = useState([
        formField
    ])

    const [count, setCount] = useState(1);

    const addNewEducation = () => {
        setEducationList([...educationList, formField])
        setCount(prev => prev + 1);
    }
    const removePreviousEducation = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
            setEducationList(educationList => educationList.slice(0, -1));
        }
    }

    // const handleChange = (index, event) => {
    //     const newEntries = educationList.slice();
    //     const { name, value } = event.target;
    //     newEntries[index][name] = value;
    //     console.log(newEntries)
    //     setEducationList(newEntries)
    // }
    const handleChange = (index, event) => {
        const newEntries = educationList.map((entry, i) => {
            if (i === index) {
                return { ...entry, [event.target.name]: event.target.value };
            }
            return entry;
        });
        // console.log(newEntries);
        setEducationList(newEntries);
    };

    useEffect(() => {
        setResumeInfo(prevResumeInfo => ({
            ...prevResumeInfo,
            education: educationList
        }));
    }, [educationList])


    return (
        <div className='mb-4 bg-white p-4 rounded shadow'>
            <span className='text-indigo-600 text-xl font-bold'>Education Details</span>

            {
                educationList?.map((item, index) => (
                    <form key={index} className="max-w-md mx-auto mt-2 mb-1">

                        {/* Divider line  */}
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-1 my-8 bg-indigo-400 border-0 rounded-sm " />
                            <div className="absolute px-4 -translate-x-1/2 bg-indigo-400 text-white left-1/2 rounded-sm">
                                {index + 1}
                            </div>
                        </div>
 
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(event) => handleChange(index, event)} name="degree" id="degree" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                            <label htmlFor="degree" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Degree</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(event) => handleChange(index, event)} name="collage" id="collage" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                            <label htmlFor="collage" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Collage</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(event) => handleChange(index, event)} name="cgpa" id="cgpa" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                            <label htmlFor="cgpa" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CGPA</label>
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
                    </form>
                ))
            }

            <div className='flex justify-end gap-2 text-white text-2xl cursor-pointer '>
                <div className='flex justify-center bg-indigo-400 items-center px-2 rounded hover:bg-indigo-600'
                    onClick={addNewEducation}>
                    <span><IoMdAdd /></span>
                    <span className='text-lg font-mono'>Add</span>
                </div>
                {
                    count > 1 ? (
                        <div className='flex justify-center bg-indigo-400 items-center px-2 rounded hover:bg-indigo-600'
                            onClick={removePreviousEducation}>
                            <span><IoMdRemove /></span>
                            <span className='text-lg font-mono'>Remove</span>
                        </div>
                    ) : null
                }
            </div>

        </div>
    )
}

export default EducationFrom