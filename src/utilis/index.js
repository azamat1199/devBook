export const handleErrorObject = (errorMsg = "") => {
  console.log(errorMsg);
  if (errorMsg.includes("E11000")) {
    return {
      typecheck: "email",
      message: "This user exist. Choose another",
    };
  }
  const errorType = errorMsg.slice(
    errorMsg.indexOf('"'),
    errorMsg.lastIndexOf('"')
  );
  return {
    type: errorType.replace('"', "").replace("\\", ""),
    message: errorMsg,
  };
};

export const getValidInputData = (data = {}, excludedFileds = []) => {
  let result = {};
  const balckList = [null, "", undefined];

  for (let x in data) {
    if (Array.isArray(data[x]) && data[x].length0) {
      result = { ...result, [x]: data[x] };
    } else if (!balckList.includes(data[x]) && !excludedFileds.includes(x)) {
      result = { ...result, [x]: data[x] };
    }
  }

  return result;
};
