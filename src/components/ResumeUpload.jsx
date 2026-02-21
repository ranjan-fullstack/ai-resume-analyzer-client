import { useState } from "react";
import { uploadResume } from "../services/api";

const ResumeUpload = ({ setResumeText }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a PDF file");

    const formData = new FormData();
    formData.append("resume", file);

    const res = await uploadResume(formData);
    setResumeText(res.data.resumeText);
    alert("Resume uploaded successfully ✅");
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Upload Resume (PDF)
      </label>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="block w-full text-sm border border-gray-300 rounded-lg p-2 cursor-pointer bg-gray-50"
      />

      <button
        onClick={handleUpload}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeUpload;