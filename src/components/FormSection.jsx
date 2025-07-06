import { useRef, useState } from "react";
import PersonalInfoFrom from "./formElements/PersonalInfoFrom";
import EducationFrom from "./formElements/EducationFrom";
import { useNavigate } from "react-router-dom";
import WorkExpForm from "./formElements/WorkExpForm";
import SkillsForm from "./formElements/SkillsForm";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import ResumeTemplate from "./ResumeTemplate";
import { useMediaQuery } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { RWebShare } from "react-web-share";
import { HiArrowLeft, HiEye, HiDownload, HiShare } from "react-icons/hi";

const FormSection = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors focus-visible-ring rounded-lg px-3 py-2"
            >
              <HiArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>

            {/* Mobile Preview Button */}
            {isMobile && (
              <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
                className="modern-button-secondary"
                startDecorator={<HiEye className="w-4 h-4" />}
              >
                Live Preview
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Form Sections */}
          <div className="space-y-8">
            <PersonalInfoFrom />
            <EducationFrom />
            <WorkExpForm />
            <SkillsForm />
          </div>
        </div>
      </div>

      {/* Mobile Preview Drawer */}
      {isMobile && (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{
            content: {
              sx: {
                width: "100%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              },
            },
          }}
        >
          <div className="h-full flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <DialogTitle className="text-white font-semibold">
                Resume Preview
              </DialogTitle>
              <ModalClose className="text-white" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 p-4 bg-white/10">
              <button
                onClick={() => reactToPrintFn()}
                className="modern-button flex items-center space-x-2"
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
                <button className="modern-button-secondary flex items-center space-x-2">
                  <HiShare className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </RWebShare>
            </div>

            {/* Resume Preview */}
            <div className="flex-1 overflow-auto custom-scrollbar p-4">
              <div ref={contentRef} className="bg-white rounded-lg shadow-lg">
                <ResumeTemplate />
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default FormSection;
