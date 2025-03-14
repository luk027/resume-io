import { useRef, useState } from "react";
import PersonalInfoFrom from "./formElements/PersonalInfoFrom";
import EducationFrom from "./formElements/EducationFrom";
import { useNavigate } from "react-router-dom";
import WorkExpForm from "./formElements/WorkExpForm";
import SkillsForm from "./formElements/SkillsForm";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import ResumeTemplate from "./ResumeTemplate";
import { useMediaQuery } from "@mui/material";
import { useReactToPrint } from 'react-to-print'
import { RWebShare } from 'react-web-share'

const FormSection = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="p-4">
      {/* back to home btn  */}
      <div className="flex justify-between">
        <span
          onClick={() => navigate("/")}
          className="text-sm cursor-pointer font-semibold text-indigo-600"
        >
          <span aria-hidden="true">&larr;</span> Go back home
        </span>

        {isMobile && (
          <Box sx={{ display: "flex" }}>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(true)}
            >
             <span className="text-indigo-600">Show Preview</span> 
            </Button>
            <Drawer
              open={open}
              onClose={() => setOpen(false)}
              slotProps={{ content: { sx: { width: "100%" } } }}
            >
              <div className="bg-amber-500">
                <ModalClose />
                <div className='flex justify-start items-center pl-2 my-2 gap-4'>
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
                // title: 'Resume: '+resumeInfo.personalInfo.name,
                // html: sharedComponentHtml,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <span className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Share 🔗
              </span>
            </RWebShare>
          </div>
                <div ref={contentRef} className="p-2 mt-1">
                  <ResumeTemplate />
                </div>
              </div>
            </Drawer>
          </Box>
        )}
      </div>

      <PersonalInfoFrom />

      <EducationFrom />

      <WorkExpForm />

      <SkillsForm />
    </div>
  );
};

export default FormSection;
