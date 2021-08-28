module.exports = {
    domain: {
        local: {
            server: "http://localhost:3030",
            client: "http://localhost:3000",
        },
        production: {
            server: "http://server.daydecider.com",
            client: "http://www.daydecider.com",
        },
        dev: {
            server: "http://localhost:3030",
            client: "http://localhost:3000",
        }
    }
}