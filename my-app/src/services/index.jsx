export default class Requests {
    static allData(url) {
        return fetch(url).then((response) => {
            if (response.ok && response.status !== 404) {
                return response.json();
            } else {
                throw new Error(`Cloud not fetch ${url}, status: ${response.status}`);
            }
        }).catch((response) => {
            throw new Error(`Cloud not fetch ${url}, status: ${response.status}`);
        });
    }
}