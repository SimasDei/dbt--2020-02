exports.getResult = async (req, res) => {
  const result = req.body;
  try {
    res.status(201).json({
      status: 'success',
      winnable: true,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
