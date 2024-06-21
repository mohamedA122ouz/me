/**
 * @param {string} url
 * @param {"GET" | "POST"} method
 * @param {Object} body
 */
export default function fectching(url, method, body) {

    try {
        if (method === "POST")
            return fetch(url, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            });
        else
            return fetch(url);
    } catch (ex) {
        console.log(ex);
    }
}