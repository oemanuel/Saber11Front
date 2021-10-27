import { all, spawn } from 'redux-saga/effects'

import { dashboardSagas } from '../pages/DashboardApp/saga'
import { diagramaDeCajaSagas } from '../pages/DiagramaDeCaja/saga'

const superSagas = [...dashboardSagas,...diagramaDeCajaSagas]
export default function* rootSaga() {
    yield all(
        superSagas.map(saga =>
            spawn(function* () {
                while (true) {
                    try {
                        yield saga
                        break
                    } catch (e) {
                        console.log(e)
                    }
                }
            })),
    );
}