import BlackofferCollectionGUI from "../model/dataModel.js";

export const getAllData = async (req, res) => {
  try {
    const allData = await BlackofferCollectionGUI.find();
    // console.log(allData);

    res.status(200).json({
      success: true,
      allData,
    });
  } catch (error) {}
};
