

export function makeId(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function makeUUID() {
    return makeId(8) + '-' + makeId(4) + '-' + makeId(4) + '-' + makeId(4) + '-' + makeId(12);
}