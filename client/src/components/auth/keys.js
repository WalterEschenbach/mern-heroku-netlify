module.exports = {
    domain: {
        local: {
            server: "http://localhost:3030",
            client: "http://localhost:3000",
        },
        production: {
            server: "https://server.daydecider.com",
            client: "https://www.daydecider.com",
        },
        dev: {
            server: "https://server.daydecider.com",
            client: "https://www.daydecider.com",
        }
    }
}