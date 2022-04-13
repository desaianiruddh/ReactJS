export const mouseEnter = (profileImg, empName, empEmail, isEmpActive) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      empName: empName,
      empEmail: empEmail,
      profileImg: profileImg,
      empStatus: isEmpActive,
    },
  };
};
export const mouseLeave = () => {
  return {
    type: 'MOUSE_LEAVE',
  };
};
