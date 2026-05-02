import { useState } from "react";
import { predictProcess } from "../api";
import { motion } from "framer-motion";

function InputForm({ setResult }) {
  const [form, setForm] = useState({
    organism: "E.coli",
    reactor_volume: 10,
    agitation_speed: 200,
    aeration_rate: 2,
    temperature: 30,
    pH: 7,
    substrate_concentration: 20
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await predictProcess(form);
    setResult(res.data);
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-xl mb-4">Process Parameters</h2>

      <div className="space-y-3">

  <select
  name="organism"
  value={form.organism}
  onChange={handleChange}
  className="w-full p-2 rounded bg-black/40"
>
  <option value="E.coli">E.coli (fast growth)</option>
  <option value="Yeast">Yeast (robust)</option>
  <option value="Bacillus">Bacillus (industrial enzyme)</option>
</select>

  <div>
    <label>Reactor Volume (L)</label>
    <input name="reactor_volume" value={form.reactor_volume} onChange={handleChange}
      className="w-full p-2 rounded bg-black/40" />
  </div>

 <div>
  <label>Agitation Speed (RPM): {form.agitation_speed}</label>
  <input
    type="range"
    min="50"
    max="1000"
    name="agitation_speed"
    value={form.agitation_speed}
    onChange={handleChange}
    className="w-full"
  />
</div>

  <div>
  <label>Aeration Rate (vvm): {form.aeration_rate}</label>
  <input
    type="range"
    min="0.5"
    max="10"
    step="0.1"
    name="aeration_rate"
    value={form.aeration_rate}
    onChange={handleChange}
    className="w-full"
  />
</div>

  <div>
    <label>Temperature (°C)</label>
    <input name="temperature" value={form.temperature} onChange={handleChange}
      className="w-full p-2 rounded bg-black/40" />
  </div>

  <div>
    <label>pH</label>
    <input name="pH" value={form.pH} onChange={handleChange}
      className="w-full p-2 rounded bg-black/40" />
  </div>

  <div>
    <label>Substrate Concentration (g/L)</label>
    <input name="substrate_concentration" value={form.substrate_concentration} onChange={handleChange}
      className="w-full p-2 rounded bg-black/40" />
  </div>

</div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
      >
        Predict Scale-Up
      </button>
    </motion.div>
  );
}

export default InputForm;