const API_KEY = "K9GaetLqF3nWnJT1mdiSQhW1yvs";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        dispalyStatus(data.expiry);
    } else {
        throw new Error(data.error);
    }

}

function dispalyStatus(data) {
    document.getElementById('resultsModalTitle').innerHTML = heading;
    document.getElementById('results-content').innerHTML = results;

    resultsModal.show();
}