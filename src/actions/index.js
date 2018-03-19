import constants from './constants';

export function fetchOrganizationByOrgNr(orgNr) {
  const url = `http://data.brreg.no/enhetsregisteret/enhet/${orgNr}.json`
  return fetchOrganizations(url, )
}

export function fetchOrganizationByName(namePrefix) {
  const filter = `$filter=startswith(navn,'${namePrefix}')`
  const url = `http://data.brreg.no/enhetsregisteret/enhet.json?${filter}`;

  return fetchOrganizations(url)
}

function fetchOrganizations(url) {
  return dispatch => {
    dispatch(startFetch());

    return fetch(url)
      .then(
        response => {
          if (response.status === 400) {
            return Promise.reject(response.json());
          }
          else
            return response.json()
        },
        error => dispatch(fetchFail(error))
      )
      .then(json => {
        dispatch(fetchSuccess(formatResponse(json)))
      }, error => {
        dispatch(fetchFail())
      })
  }
}

//If response is nested, retrieve list of data, else make singleton list
const formatResponse = json => json.page ? (json.data ? json.data : []) : [json];

export function startFetch() {
  return {
    type: constants.FETCH_ORGANIZATIONS,
  }
}

export function fetchSuccess(orgs) {
  return {
    type: constants.FETCH_SUCCESS,
    organizations: orgs,
  }
}

export function fetchFail() {
  return {
    type: constants.FETCH_FAIL,
  }
}

export function clearOrganizations() {
  return {
    type: constants.CLEAR_ORGANIZATIONS,
  }
}
