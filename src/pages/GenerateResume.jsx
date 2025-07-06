import { useContext, useEffect, useRef } from "react";
import FormSection from "../components/FormSection";
import ResumeTemplate from "../components/ResumeTemplate";
import { useReactToPrint } from "react-to-print";
import { RWebShare } from "react-web-share";
import { ResumeContext } from "../context/ResumeContext";
import { useMediaQuery } from "@mui/material";
import { HiDownload, HiShare, HiEye } from "react-icons/hi";

const GenerateResume = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);

  useEffect(() => {
    setResumeInfo(resumeInfo);
  }, []);

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Background decoration */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
        {/* Form Section */}
        <div className="lg:h-screen overflow-y-auto custom-scrollbar">
          <FormSection />
        </div>

        {/* Preview Section - Desktop Only */}
        {!isMobile && (
          <div className="lg:h-screen overflow-y-auto custom-scrollbar bg-white/80 backdrop-blur-sm">
            {/* Preview Header */}
            <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <HiEye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Live Preview
                    </h2>
                    <p className="text-sm text-gray-600">
                      See your resume in real-time
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => reactToPrintFn()}
                    className="modern-button-secondary flex items-center space-x-2"
                  >
                    <HiDownload className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <RWebShare
                    data={{
                      text: "Resume from Resume.io, an Ultimate Resume Builder.",
                      url: "http://localhost:5173/",
                      title: "Resume from Resume.io",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button className="modern-button flex items-center space-x-2">
                      <HiShare className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </RWebShare>
                </div>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-6">
              <div
                ref={contentRef}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <ResumeTemplate />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom decoration */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GenerateResume;
