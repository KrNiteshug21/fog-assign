import Setting from "../model/Setting.js";

export const getSettings = async (req, res) => {
  try {
    const settings = await Setting.find();
    return res.json(settings);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSetting = async (req, res) => {
  try {
    const { region, punkbaster, fairfight, password, preset } = req.body;
    const setting = await Setting.create({
      region,
      punkbaster,
      fairfight,
      password,
      preset,
    });

    return res.status(201).json(setting);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateSetting = async (req, res) => {
  const id = req.params.id;

  try {
    const setting = await Setting.findById(id);
    Object.keys(req.body).forEach((key) => {
      setting[key] = req.body[key];
    });

    const updatedSetting = await setting.save();
    return res.status(200).json(updatedSetting);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
