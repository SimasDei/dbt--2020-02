exports.getResult = async (req, res) => {
  const result = req.body;
  try {
    res.status(201).json({
      success: true,
      winnable: true,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
};

exports.getTest = (req, res) => {
  res.status(201).json({
    success: true,
    data: {
      numberArray: [1, 2, 3, 4, 5],
    },
  });
};
