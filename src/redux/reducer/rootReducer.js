import{combineReducers} from 'redux'
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
const rootReducer = combineReducers({
    // Nơi store chứa  các reducer cho nghiệp vụ (store con)

    //state bài tập oan tu xi
    BaiTapOanTuXiReducer,
    //state bài tập BookingTicket
    BaiTapDatVeReducer
})

export default rootReducer;