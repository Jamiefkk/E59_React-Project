const baseUrl = 'http://localhost:9000/api/'

export const getDailyBySymbol = (symbol) => {
    return fetch(baseUrl + `${symbol}Daily`)
        .then(res => res.json());
};


