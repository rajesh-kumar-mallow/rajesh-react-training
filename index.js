const validatePassword = (password) => {

    let count = 0;

    if (password.length <= 8) {
        count = count+2;
    }
    if (password.length <= 12) {
        count = count+2;
    }
    if(password.match(/D/)) {
        count ++;
    }
    if(password.match(/d/)) {
        count ++;
    }
    if(password.match(/D/)) {
        count ++;
    }
    if(password.match(/D/)) {}
}
