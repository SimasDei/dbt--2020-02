exports.getResult = async (req, res) => {
  const { result } = req.body;

  const jump = numArray => {
    const n = numArray.length;
    const result = {
      numArray,
      maxReach: numArray[0],
      step: numArray[0],
      jump: 1,
      end: n - 1,
      position: 0,
      winnable: false,
      jumps: [0],
    };

    if (numArray[0] === 0) return result;

    while (result.position < n) {
      result.position += 1;

      if (result.position === result.end) {
        result.winnable = true;
        return result;
      }

      result.maxReach = Math.max(result.maxReach, result.position + numArray[result.position]);
      result.jumps[result.position] = result.jump;
      result.step -= 1;

      if (result.step === 0) {
        result.jump += 1;

        if (result.position >= result.maxReach) return result;
        result.step = result.maxReach - result.position;
      }
    }

    return result;
  };

  const calculation = jump(result);

  try {
    res.status(201).json({
      success: true,
      data: {
        result: calculation,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
};

exports.getArray = (req, res) => {
  res.status(201).json({
    success: true,
    data: {
      numberArray: [1, 2, 0, 3, 0, 2, 0],
    },
  });
};
