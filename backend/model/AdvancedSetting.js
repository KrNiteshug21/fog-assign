import mongoose from "mongoose";
const Schema = mongoose.Schema;

const advancedSettingSchema = new Schema({
  minimap: {
    type: Boolean,
    required: true,
  },
  onlySquadLeaderSpawn: {
    type: Boolean,
    required: true,
  },
  vehicles: {
    type: Boolean,
    required: true,
  },
  teamBalance: {
    type: Boolean,
    required: true,
  },
  minimapSpotting: {
    type: Boolean,
    required: true,
  },
  hud: {
    type: Boolean,
    required: true,
  },
  vehicleCam: {
    type: Boolean,
    required: true,
  },
  regenerativeHealth: {
    type: Boolean,
    required: true,
  },
  killCam: {
    type: Boolean,
    required: true,
  },
  friendlyFire: {
    type: Boolean,
    required: true,
  },
  spotting: {
    type: Boolean,
    required: true,
  },
  enemyNameTags: {
    type: Boolean,
    required: true,
  },
});

const AdvancedSetting = mongoose.model(
  "AdvancedSetting",
  advancedSettingSchema
);
export default AdvancedSetting;
