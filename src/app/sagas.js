import { all, spawn } from 'redux-saga/effects'

import { dashboardSagas } from '../pages/DashboardApp/saga'

export default function* rootSaga() {
    yield all(dashboardSagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield saga
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        }))
    );
}