import Setting from "../model/Setting.js";

export const getSettings = async (req, res) => {
  try {
    const settings = await Setting.find();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSetting = async (req, res) => {
  const setting = new Setting({
    key: req.body.key,
    value: req.body.value,
  });

  try {
    const newSetting = await setting.save();
    res.status(201).json(newSetting);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
    res.status(200).json(updatedSetting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
