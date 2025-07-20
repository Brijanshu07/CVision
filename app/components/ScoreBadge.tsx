import React from "react";

type ScoreBadgeProps = {
  score: number;
};

const getBadgeConfig = (score: number) => {
  if (score > 70) {
    return {
      label: "Strong",
      bg: "bg-badge-green",
      text: "text-green-600",
    };
  } else if (score > 49) {
    return {
      label: "Good start",
      bg: "bg-badge-yellow",
      text: "text-yellow-700",
    };
  } else {
    return {
      label: "Needs work",
      bg: "bg-badge-red",
      text: "text-red-600",
    };
  }
};

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const { label, bg, text } = getBadgeConfig(score);
//   console.log(label)?

  return (
    <div
      className={` px-3 py-1 rounded-full font-semibold text-sm ${bg} ${text}`}
      data-testid="score-badge"
    >
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreBadge;