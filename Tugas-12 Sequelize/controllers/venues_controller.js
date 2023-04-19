const { Venues } = require("../models");

const createVenue = async (req, res) => {
  try {
    const newVenue = await Venues.create({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
    });
    if (newVenue) {
      res.status(201).json({
        status: "success",
        message: "Data berhasil dibuat",
        data: newVenue,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Data gagal dibuat",
      error: error,
    });
  }
};

const findAllVenues = async (req, res) => {
  try {
    const dataVenues = await Venues.findAll({
      attributes: ["name", "address", "phone"],
    });
    if (dataVenues) {
      res.status(200).json({
        status: "success",
        message: "Berhasil mendapatkan data",
        data: dataVenues,
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Data venue tidak dapat ditemukan",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error find all venue",
      error: error,
    });
  }
};

const findVenueById = async (req, res) => {
  try {
    let { id } = req.params;
    console.log("ID venue: ", id);
    const resultVenue = await Venues.findOne({
      where: {
        id: id,
      },
    });
    if (resultVenue) {
      res.status(200).json({
        status: "success",
        message: "Data berhasil ditemukan",
        data: resultVenue,
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Data Venue tidak dapat ditemukan",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error findVenueById",
      error: error,
    });
  }
};

const updateVenue = async (req, res) => {
  try {
    let { id } = req.params;
    const resultVenue = await Venues.findOne({
      where: {
        id: id,
      },
    });
    await Venues.update(
      {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if(resultVenue){
      res.status(200).json({
        status: "success",
        message: `update data ${resultVenue.name} berhasil`,
        data: {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone
        }
      });
    }else{
      res.status(404).json({
        status: "failed",
        message: "Data Venue tidak dapat ditemukan",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error update venue",
      error: error,
    });
  }
};

const deleteVenue = (async (req, res) => {
  try {
    let { id } = req.params;
    const resultVenue = await Venues.findOne({
      where: {
        id: id,
      },
    });
    await Venues.destroy(
      {
        where: {
          id: id
        }
      }
    );
    if(resultVenue){
      res.status(200).json({
        status: "success",
        message: `delete data ${resultVenue.name} berhasil`,
      });
    }else{
      res.status(404).json({
        status: "failed",
        message: "Data Venue tidak dapat ditemukan",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Error Delete Venue",
      error: error,
    });
  }
})

module.exports = {
  createVenue,
  findAllVenues,
  findVenueById,
  updateVenue,
  deleteVenue
};
