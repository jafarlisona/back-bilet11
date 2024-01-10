import { ServicesModel } from "../model/ServicesModel.js";

export const getAllServices = async (req, res) => {
  try {
    const allServices = await ServicesModel.find({});
    res.status(200).json(allServices);
  } catch (error) {
    res.send("Services are not found!");
  }
};

export const getServiceById = async (req, res) => {
  const { id } = req.params;
  const service = await ServicesModel.findById(id);
  res.send(service);
};

export const createServices = async (req, res) => {
  try {
    const { title, description, icon } = req.body;
    const newServices = new ServicesModel({ title, description, icon });
    await newServices.save();
    res.send("Service is created!");
  } catch (error) {
    res.send("Service is not created!");
  }
};

export const deleteServiceById = async (req, res) => {
  const { id } = req.params;
  const service = await ServicesModel.findByIdAndDelete(id);
  res.send(service);
};
