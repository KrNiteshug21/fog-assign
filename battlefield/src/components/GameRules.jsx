import { useRules } from "../hooks/api";
import DataConfig from "./DataConfig";

const GameRules = () => {
  const { rules, loading, isError, error } = useRules();
  if (loading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const filteredRules = rules.map((rule) =>
    Object.keys(rule).reduce((acc, key) => {
      if (key !== "_id" && key !== "__v") {
        acc[key] = rule[key]; // Add the key-value pair to the accumulator object
      }
      return acc;
    }, {})
  );

  return (
    <div className="flex-auto">
      <h3 className="font-semibold text-2xs tracking-widest">RULES</h3>
      <DataConfig data={filteredRules} />
    </div>
  );
};

export default GameRules;
