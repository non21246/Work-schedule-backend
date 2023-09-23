const workService = require('../works/works.service.js');

const getWorkById = async (req, res) => {
  try {
    const work = await workService.getWorkById(req.params.id);
    if (!work) {
      res.status(404).json({ error: "Work not found" });
      return;
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllWorks = async (req, res) => {
  try {
    const works = await workService.getWork();
    res.status(200).json(works);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWorkById = async (req, res) => {
  try {
    const deletedWork = await workService.deleteWorkById(req.params.id);
    if (!deletedWork) {
      res.status(404).json({ error: "Work not found" });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWorkStatusById = async (req, res) => {
  try {
    const updatedWork = await workService.updateWorkStatusById(req.params.id, req.body);
    if (!updatedWork) {
      res.status(404).json({ error: "Work not found" });
      return;
    }
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWorkById = async (req, res) => {
  try {
    const updatedWork = await workService.updateWorkById(req.params.id, req.body);
    if (!updatedWork) {
      res.status(404).json({ error: "Work not found" });
      return;
    }
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWork = async (req, res) => {
  try {
    const work = await workService.createWork(req.body);
    res.status(201).json(work);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {getWorkById, getAllWorks, deleteWorkById, updateWorkStatusById, updateWorkById, createWork};
