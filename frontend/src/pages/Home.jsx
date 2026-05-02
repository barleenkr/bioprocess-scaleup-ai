import InputForm from "../components/InputForm";
import ResultsPanel from "../components/ResultsPanel";
import { useState } from "react";

function Home() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        🧬 AI Bioprocess Scale-Up Predictor
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <InputForm setResult={setResult} />
        <ResultsPanel result={result} />
      </div>
    </div>
  );
}

export default Home;