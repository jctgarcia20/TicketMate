import usersService from "./users-service";

const key = process.env.API_key;
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

const TicketmasterService = {
  async eventSearch(keyword, zipcode) {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=${key}=${keyword}&postalCode=${zipcode}`
      );
      return response.ok ? response.json() : { error: response.status };
    } catch (error) {
      return { error: error };
    }
  },
}