import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rulesSchema = new Schema({
  tickets: {
    type: Number,
    required: true,
  },
  vehicleSpawnDelay: {
    type: Number,
    required: true,
  },
  bulletDamage: {
    type: Number,
    required: true,
  },
  killAfterTeamKills: {
    type: Number,
    required: true,
  },
  playerHealth: {
    type: Number,
    required: true,
  },
  playerRespawnTime: {
    type: Number,
    required: true,
  },
  kickAfterIdle: {
    type: Number,
    required: true,
  },
  banAfterKick: {
    type: Number,
    required: true,
  },
});

const Rules = mongoose.model("Rules", rulesSchema);
export default Rules;
