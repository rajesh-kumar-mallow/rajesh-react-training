const validatePassword = (password) => {
    if (!password) {
        throw new Error('no password found')
    }

    let count = 0;

    if (password.length >= 8) {
        count = count + 2;
    }
    if (password.length >= 12) {
        count = count + 2;
    }
    if (password.match(/[A-Z]/g)) {
        count++;
    }
    if (password.match(/[a-z]/g)) {
        count++;
    }
    if (password.match(/\d/g)) {
        count++;
    }
    if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/g)) {
        count++;
    }
    if (count <= 3) {
        return 'Weak';
    } else if (count <= 6) {
        return 'Medium';
    }
    return 'Strong';
}
