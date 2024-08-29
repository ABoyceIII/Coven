export default class Resident {
  #displayName;
  #emailAddress;
  #fullName;
  #phoneNumber;
  #photoURL;
  #residence;
  #rooms = [];
  #statusColor;
  #statusDescription = "";
  #reference;
  #uid;

  /**
   * Constructor used at Welcome page
   * @param {*} displayName
   * @param {*} emailAddress
   * @param {*} fullName
   */
  constructor(displayName, emailAddress, fullName, uid) {
    this.displayName = displayName;
    this.emailAddress = emailAddress;
    this.fullName = fullName;
    this.statusColor = "#808080";
    this.uid = uid;
  }
}
