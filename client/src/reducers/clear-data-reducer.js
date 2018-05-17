import founders from './founders-reducer'

export default function(state=founders(), action) {

        switch(action.type){
            case "CLEAR_DATA":
                console.log('connected')
                return founders();
                break;
                default: return state;
        }
    }
