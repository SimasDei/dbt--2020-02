exports.getResult = async (req, res) => {
  const { result } = req.body;
  console.log({ result });

  const jump = numArray => {
    const arrayLength = numArray.length;
    let steps = numArray[0];
    let range = numArray[0];
    let jump = 1;
    let winnable = false;
    const result = {
      range,
      steps,
      jump,
      winnable,
    };

    if (arrayLength <= 1 || numArray[0] === 0) return result;

    for (let position = 1; numArray[position - 1] < arrayLength; position += 1) {
      if (position === arrayLength - 1) return result;
      if (position + numArray[position] > range) {
        range = position + numArray[position];
        steps -= 1;
      }
      if (steps === 0) {
        jump += 1;
        steps = range - position;
      }

      console.log({ range, steps, jump, position });
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
