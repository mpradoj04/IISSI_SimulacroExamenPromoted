import { get, post, put, destroy, patch } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('users/myrestaurants')
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

function getAnyPromoted () {
  return get('restaurants/promoted')
}

function create (data) {
  return post('restaurants', data)
}

function update (id, data) {
  return put(`restaurants/${id}`, data)
}

function remove (id) {
  return destroy(`restaurants/${id}`)
}

function promote (id) {
  return patch(`restaurants/${id}/promote`)
}

function depromote () {
  return patch('restaurants/depromote')
}

export { getAll, getDetail, getRestaurantCategories, create, update, remove, promote, depromote, getAnyPromoted }
