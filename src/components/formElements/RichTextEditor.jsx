import { useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnNumberedList,
  BtnRedo,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";

const RichTextEditor = ({ sendDataToParent }) => {
  const [value, setValue] = useState("--Your Work Experience--");

  function onChange(e) {
    setValue(e.target.value);
    sendDataToParent(e);
  }

  return (
    <EditorProvider>
      <Editor
        value={value}
        onChange={onChange}
        className="border-x-1 border-1 border-gray-300 focus:border-indigo-600"
      >
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnUndo />
          <BtnRedo />
          <Separator />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
};

export default RichTextEditor;
