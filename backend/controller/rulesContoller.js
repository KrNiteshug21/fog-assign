import Rules from "../model/Rules.js";

export const getRules = async (req, res) => {
  try {
    const rules = await Rules.find();
    return res.json(rules);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRule = async (req, res) => {
  const rule = new Rules({
    key: req.body.key,
    value: req.body.value,
  });

  try {
    const newRule = await rule.save();
    return res.status(201).json(newRule);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateRule = async (req, res) => {
  const id = req.params.id;

  try {
    const rule = await Rules.findById(id);
    Object.keys(req.body).forEach((key) => {
      rule[key] = req.body[key];
    });

    const updatedRule = await rule.save();
    return res.status(200).json(updatedRule);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
