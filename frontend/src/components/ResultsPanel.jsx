import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function ResultsPanel({ result }) {
  if (!result) {
    return (
      <div className="flex items-center justify-center text-gray-400">
        Results will appear here
      </div>
    );
  }

  const data = [
  { stage: "Lab", kLa: result.predicted_kLa * 0.4 },
  { stage: "Pilot", kLa: result.predicted_kLa * 0.7 },
  { stage: "Industrial", kLa: result.predicted_kLa }
];

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-xl mb-4">Prediction Results</h2>

      <p><strong>kLa:</strong> {result.predicted_kLa}</p>
      <p><strong>Confidence:</strong> {result.confidence}%</p>
      <p><strong>Risk:</strong> {result.risk_level}</p>
      <p className="mb-4"><strong>Recommendation:</strong> {result.recommendation}</p>
      <p className={
  result.risk_level.includes("High") ? "text-red-400" :
  result.risk_level.includes("Moderate") ? "text-yellow-400" :
  "text-green-400"
}>
  <strong>Risk:</strong> {result.risk_level}
</p>

      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="kLa" />
      </LineChart>
    </motion.div>
  );
}

export default ResultsPanel;