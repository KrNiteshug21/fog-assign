import AdvancedSetting from "../model/AdvancedSetting.js";

export const getAdvancedSettings = async (req, res) => {
  try {
    const advancedSettings = await AdvancedSetting.find();
    return res.json(advancedSettings);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAdvancedSetting = async (req, res) => {
  const advancedSetting = new AdvancedSetting({
    key: req.body.key,
    value: req.body.value,
  });

  try {
    const newAdvancedSetting = await advancedSetting.save();
    return res.status(201).json(newAdvancedSetting);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateAdvancedSetting = async (req, res) => {
  const id = req.params.id;

  try {
    const advancedSetting = await AdvancedSetting.findById({ id });
    Object.keys(req.body).forEach((key) => {
      advancedSetting[key] = req.body[key];
    });

    const updatedAdvancedSetting = await advancedSetting.save();
    return res.status(200).json(updatedAdvancedSetting);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
