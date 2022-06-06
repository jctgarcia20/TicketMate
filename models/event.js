const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  id: {type: String},
  keyword: {type: String},
  attractionId: {type: String},
  venueId: {type: String},
  postalCode: {type: String},
  radius: {type: String},
  unit: {
    type: stringEnum ['miles', 'km'],
    default: 'miles'
  },
  source: {
    type: stringEnum ["ticketmaster", " universe", " frontgate", " tmr"]
  },
  locale: {type: String, default: 'en'},
  marketId: {type: String},
  startDateTime: {type: String},
  endDateTime: {type: String},
  size: {type: String, default: 20},
  page: {type: String},
  sort: {type: String, default: 'relevance,desc'},
  onsaleStartDateTime: {type: String},
  onsaleEndDateTime: {type: String},
  city: {type: []},
  countryCode: {type: String},
  stateCode: {type: String},
  classifciationName: {type: []},
  classifciationId: {type: []},
  localStartDateTime: {type: []},
  localStartEndDateTime: {type: []},
  startEndDateTime: {type: []},
  publicVisibilityStartDateTime: {type: []},
  preSaleDateTime: {type: []},
  onsaleOnStartDate: {type: String},
  onsaleOnAfterStartDate: {type: String},
  collectionId: {type: []},
  segmentId: {type: []},
  segmentName: {type: []},
  includeFamily: {
    type: stringEnum ["yes", " no", " only"],
    default: yes
  },
  promoterId: {type: String},
  genreId: {type: []},
  subGenreId: {type: []},
  typeId: {type: []},
  subTypeId: {type: []},
  geoPoint: {type: String},
  preferredCountry: {
    type: stringEnum ["us", " ca"],
    default: 'us'
  },
  includeSpellcheck: {
    type: stringEnum ["yes", " no"],
    default: 'no'
  },
  domain: {type: []},
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);