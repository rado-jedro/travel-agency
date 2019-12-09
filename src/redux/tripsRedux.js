/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  output = output.filter(trip => (trip.days >= filters.duration.from && trip.days <= filters.duration.to ));
  // TODO - filter by tags

  if (filters.tags) {
    output = output.filter(trip =>
      filters.tags.every(tag => trip.tags.indexOf(tag) > -1)
    );
  }


  output = output.filter(trip => (trip.tags !== filters.tags));
  // TODO - sort by cost descending (most expensive goes first)
  console.log(output);
  output = output.sort(trips.cost);
  console.log(output[0].cost);
  return output;
};

export const getTripById = ({trips}, tripId) => {

  // TODO - filter trips by tripId
  const filtered = trips.filter(trip => tripId ===trip.id);


  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  //const filtered = trips;

  // TODO - filter trips by countryCode

  const filtered = trips.filter(trip => countryCode ===trip.country.code);
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
