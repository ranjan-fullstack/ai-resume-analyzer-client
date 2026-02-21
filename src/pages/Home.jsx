import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import JobDescription from "../components/JobDescription";
import AnalysisResult from "../components/AnalysisResult";
import { analyzeResume } from "../services/api";

const Home = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText || !jobDescription)
      return alert("Upload resume and enter job description");

    try {
      setLoading(true);

      const res = await analyzeResume({
        resumeText,
        jobDescription,
      });

      setAnalysis(JSON.parse(res.data.result));
    } catch (error) {
      console.error(error);
      alert("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/40">

        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          AI Resume Analyzer 🚀
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Upload your resume and compare it with any job description instantly.
        </p>

        <div className="space-y-8">

          <ResumeUpload setResumeText={setResumeText} />

          <JobDescription
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] hover:shadow-lg text-white"
              }
            `}
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

          {loading && (
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <AnalysisResult analysis={analysis} />

        </div>
      </div>
    </div>
  );
};

export default Home;