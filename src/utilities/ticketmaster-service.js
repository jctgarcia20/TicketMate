import sendRequest from "./send-request";

const key = process.env.API_key;
const BASE_URL = "/api/events";
const rootURL = "https://app.ticketmaster.com/discovery/v2/";

// export async function eventSearch(keyword, zipcode) {
//   try {
//     const response = await fetch(
//       `https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=${key}=${keyword}&postalCode=${zipcode}`
//     );
//     return response.ok ? response.json() : { error: response.status };
//   } catch (error) {
//     return { error: error };
//   }
// }

export function search(query) {
  return sendRequest(`${BASE_URL}/search`, 'POST', {query});
}

export function getAllEvents() {
  return sendRequest(`${BASE_URL}/all`);
}