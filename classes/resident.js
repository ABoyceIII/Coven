class Resident {
    #displayName;
    #emailAddress;
    #fullName;
    #phoneNumber
    #photoURL;
    #residence;
    #rooms = [];
    #statusColor = "#808080";
    #statusDescription = "";
    #reference
    #residence

    /**
     * Constructor used at Welcome page
     * @param {*} displayName 
     * @param {*} emailAddress 
     * @param {*} fullName 
     */
    constructor(displayName, emailAddress, fullName) {
        this.displayName = displayName
        this.emailAddress = emailAddress,
        this.fullName = fullName
    }
}