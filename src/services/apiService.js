export const getData = async () => {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve(10), 2000)
    );
}

export const getElseData = async () => {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve(20), 3000)
    );
}

export const getResponse = async () => {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve(30), 1500)
    );
}

export const getError = async () => {
    return new Promise((resolve, reject) =>
        setTimeout(() => reject('You Got some error'), 1500)
    );
}
