export const getMaskedPhoneNumber = (phoneNumber) => {
  if (phoneNumber) {
    return phoneNumber?.replace(/.(?=.{4})/g, "X");
  }
  return "";
};
