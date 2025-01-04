import { useSettings } from "../hooks/api";
import DataConfig from "./DataConfig";

const GameSettings = () => {
  const { settings, loading, isError, error } = useSettings();
  if (loading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const filteredSettings = settings.map((setting) =>
    Object.keys(setting).reduce((acc, key) => {
      if (key !== "_id" && key !== "__v") {
        acc[key] = setting[key];
      }
      return acc;
    }, {})
  );

  return (
    <div className="flex-auto">
      <h3 className="font-semibold text-2xs tracking-widest">SETTINGS</h3>
      <DataConfig data={filteredSettings} />
    </div>
  );
};

export default GameSettings;
