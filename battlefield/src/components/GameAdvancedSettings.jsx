import { useAdvancedSettings } from "../hooks/api";
import DataConfig from "./DataConfig";

const GameAdvancedSettings = () => {
  const { advancedSettings, loading, isError, error } = useAdvancedSettings();
  if (loading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const filteredAdvancedSettings = advancedSettings.map((setting) =>
    Object.keys(setting).reduce((acc, key) => {
      if (key !== "_id" && key !== "__v") {
        acc[key] = setting[key];
      }
      return acc;
    }, {})
  );

  return (
    <div className="flex-auto">
      <h3 className="font-semibold text-2xs tracking-widest">
        ADVANCED SETTINGS
      </h3>
      <DataConfig data={filteredAdvancedSettings} />
    </div>
  );
};

export default GameAdvancedSettings;
