const API_URL = "http://localhost:1337";
const headers = {
  "Content-Type": "application/json"
};

export async function getGeneralData() {
  const response = await fetch(`${API_URL}/all`, {
      mode: 'no-cors'
  });
  return response.json();
  //return data
}

export async function getAllCountryData() {
  const response = await fetch(`${API_URL}/all-country`, {
    method: 'GET',
    headers: headers
  });
  return response.json();
  //return data
}

export async function getCountryData(country) {
  const response = await fetch(`${API_URL}/all-country/:${country}`, {
    method: "GET",
    headers: headers
  });
  return response.json();
  //return data
}

