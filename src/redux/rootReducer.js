import{combineReducers} from 'redux'
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
const rootReducer = combineReducers({
    // Nơi store chứa  các reducer cho nghiệp vụ (store con)

    //state bài tập oan tu xi
    BaiTapOanTuXiReducer
})

export default rootReducer;