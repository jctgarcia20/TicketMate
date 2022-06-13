import sendRequest from "./send-request";

const BASE_URL = "/api/events";

export function search(query) {
  console.log(query)
  return sendRequest(`${BASE_URL}/search`, 'POST', {query});
}

export function getAllEvents() {
  return sendRequest(`${BASE_URL}/all`);
}

export function getEventDetails(params) {
  return sendRequest(`${BASE_URL}/eventId/details`, 'POST', {params});
}

export function addEventToWishlist(event) {
  return sendRequest(`${BASE_URL}/add`, 'POST', event);
}

// export function getWishlist(wishlist) {
//   return sendRequest(`${BASE_URL}/wishlist`, wishlist);
// }

export function getWishlist() {
  return sendRequest(`${BASE_URL}/wishlist`);
}

export function deleteEventWishlist(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
