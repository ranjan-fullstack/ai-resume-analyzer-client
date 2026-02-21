const JobDescription = ({ jobDescription, setJobDescription }) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Job Description
      </label>

      <textarea
        placeholder="Paste Job Description Here..."
        rows="6"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default JobDescription;