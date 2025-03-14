import { useContext, useEffect, useRef } from 'react'
import FormSection from '../components/FormSection'
import ResumeTemplate from '../components/ResumeTemplate'
import { useReactToPrint } from 'react-to-print'
import { RWebShare } from 'react-web-share'
import { ResumeContext } from '../context/ResumeContext'
import { useMediaQuery } from "@mui/material";
// import {renderToString} from "react-dom/server";

const GenerateResume = () => {

  const {resumeInfo, setResumeInfo} = useContext(ResumeContext);
  
  useEffect(() => {
    setResumeInfo(resumeInfo)
  },[])

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });
  const isMobile = useMediaQuery("(max-width: 1024px)");
  // const sharedComponentHtml = renderToString(<ResumeTemplate />);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 relative isolate bg-gray-200 scroll-smooth'>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>

      {/* FORMS */}
      {/* <div className='p-4'> */}
      <div className='md:h-screen  overflow-y-scroll no-scrollbar md:bg-white/70 backdrop-blur-sm'>
        <FormSection />
      </div>
      {/* </div> */}

      {/* PREVIEW */}
      {
        !isMobile && (<div className='p-4 scroll-smooth md:h-screen  overflow-y-scroll no-scrollbar'>
          <div className='flex justify-end items-center mb-4 gap-4'>
            <span onClick={() => reactToPrintFn()} className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Download
            </span>
            {/* <span className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Share 🔗
            </span> */}
            <RWebShare
              data={{
                text: "Resume from Resume.io, an Ultimate Resume Builder.",
                url: "http://localhost:5173/",
                title: 'Resume: '+resumeInfo.personalInfo.name,
                // html: sharedComponentHtml,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <span className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Share 🔗
              </span>
            </RWebShare>
          </div>
          <div ref={contentRef}>
            <ResumeTemplate />
          </div>
        </div>)
      }
      

        {/* BACKGROUND DESIGN */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
    </div>
  )
}

export default GenerateResume
