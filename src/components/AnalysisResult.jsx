const AnalysisResult = ({ analysis }) => {
  if (!analysis) return null;

  const {
    matchPercentage,
    skillMatchScore,
    experienceScore,
    domainRelevanceScore,
    educationScore,
    softSkillScore,
    missingCriticalSkills,
    strengths,
    improvementSuggestions,
    hiringRecommendation,
  } = analysis;

  const getBadgeColor = () => {
    if (hiringRecommendation === "Strong Hire")
      return "bg-green-500";
    if (hiringRecommendation === "Moderate")
      return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="mt-12 space-y-10">

      {/* Animated Score */}
      <div className="flex flex-col items-center space-y-4">
        <CircularProgress percentage={matchPercentage} />

        <span
          className={`px-6 py-2 rounded-full text-white font-semibold ${getBadgeColor()}`}
        >
          {hiringRecommendation}
        </span>
      </div>

      {/* Score Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">

        <ScoreCard title="Skill Match" score={skillMatchScore || 0} />
        <ScoreCard title="Experience" score={experienceScore || 0} />
        <ScoreCard title="Domain Relevance" score={domainRelevanceScore || 0} />
        <ScoreCard title="Education" score={educationScore || 0} />
        <ScoreCard title="Soft Skills" score={softSkillScore || 0} />

      </div>

      {/* Insights */}
      <div className="grid md:grid-cols-3 gap-6">

        <InsightCard
          title="Strengths"
          color="text-green-600"
          items={strengths}
        />

        <InsightCard
          title="Missing Critical Skills"
          color="text-red-600"
          items={missingCriticalSkills}
        />

        <InsightCard
          title="Improvement Suggestions"
          color="text-yellow-600"
          items={improvementSuggestions}
        />

      </div>
    </div>
  );
};

/* ============================= */
/* Animated Circular Progress */
/* ============================= */

const CircularProgress = ({ percentage }) => {
  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage >= 80) return "#22c55e"; // Green
    if (percentage >= 60) return "#eab308"; // Yellow
    return "#ef4444"; // Red
  };

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/* Background Circle */}
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress Circle */}
      <circle
        stroke={getColor()}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 1s ease-out",
        }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="26"
        fontWeight="bold"
        fill="#111827"
      >
        {percentage}%
      </text>
    </svg>
  );
};

/* ============================= */
/* Score Card */
/* ============================= */

const ScoreCard = ({ title, score }) => (
  <div className="bg-white shadow-md rounded-xl p-6 border text-center hover:shadow-lg transition">
    <h3 className="text-sm font-medium text-gray-600">{title}</h3>
    <p className="text-2xl font-bold mt-2">{score}%</p>
  </div>
);

/* ============================= */
/* Insight Card */
/* ============================= */

const InsightCard = ({ title, items, color }) => (
  <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition">
    <h3 className={`font-semibold mb-3 ${color}`}>{title}</h3>
    <ul className="space-y-2 text-sm">
      {items?.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </div>
);

export default AnalysisResult;