import { put, takeEvery } from "redux-saga/effects"
import * as actionType from "../actions/actionTypes"
import * as actionCreators from "../actions"
import { toast } from "react-toastify"
import {
  handleCommentOnTrip,
  handleCreateTrip,
  handleJoinTrip,
  handleUpdateTripData,
} from "../../firebase/utility"

// Create trip saga
export function* createTripSagaCall(action) {
  try {
    yield put(actionCreators.toggleFirebaseLoader(true))
    yield handleCreateTrip(action?.dispatch, action?.profile, action?.data)
    yield put(actionCreators.toggleFirebaseLoader(false))
  } catch (error) {
    yield put(actionCreators.toggleFirebaseLoader(false))
    toast.error(error)
  }
}

// Update user data saga
export function* updateTripDataSagaCall(action) {
  try {
    yield put(actionCreators.toggleFirebaseLoader(true))
    yield handleUpdateTripData(action?.profile, action?.tripId, action?.data)
    yield put(actionCreators.toggleFirebaseLoader(false))
  } catch (error) {
    yield put(actionCreators.toggleFirebaseLoader(false))
    toast.error(error)
  }
}

// Join trip saga
export function* joinTripSagaCall(action) {
  try {
    yield put(actionCreators.toggleFirebaseLoader(true))
    yield handleJoinTrip(action?.dispatch, action?.profile, action?.trip)
    yield put(actionCreators.toggleFirebaseLoader(false))
  } catch (error) {
    yield put(actionCreators.toggleFirebaseLoader(false))
    toast.error(error)
  }
}

// Comment On trip saga
export function* commentOnTripSagaCall(action) {
  try {
    yield put(actionCreators.toggleFirebaseLoader(true))
    yield handleCommentOnTrip(action?.profile, action?.trip, action?.comment)
    yield put(actionCreators.toggleFirebaseLoader(false))
  } catch (error) {
    yield put(actionCreators.toggleFirebaseLoader(false))
    toast.error(error)
  }
}
