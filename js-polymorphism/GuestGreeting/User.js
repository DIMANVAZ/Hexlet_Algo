class User {
    constructor(name) {
        // BEGIN (write your solution here)

        // END
        this.name = name;
    }

    getName() {
        return this.name;
    }

    // BEGIN (write your solution here)
    isGuest() {
        return false;
    }
    // END
}

export default User;