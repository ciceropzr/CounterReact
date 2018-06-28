const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const PAUSE = 'counter/pause'
const RESUME = 'counter/resume'
const RESTART = 'counter/restart'
const INPUT =	'counter/input'

const initialState = {
  count: 0,
  paused: false,
  txt: 1
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: 
      if (state.paused) {
        return state
      }
      else {
        return {
        	...state,
          count: state.count + state.txt
        }
      }
    case DECREMENT:
      if (state.paused) {
        return state
      }
      else {
        return {
        	...state,
          count: state.count - state.txt
        }
      }
    case PAUSE:
      return {
      	...state,
        paused: true
      }
    case RESUME:
      return {
      	...state,
        paused: false
      }
    case RESTART:
      return {
        count: 0,
        paused: false,
        txt: 1
      }
    case INPUT:
    	return {
    		...state,
    		txt: action.number
    	}
    default: 
      return state
  }
}

export default counterReducer

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const pause = () => {
  return {
    type: PAUSE
  }
}

export const resume = () => {
  return {
    type: RESUME
  }
}

export const restart = () => {
  return {
    type: RESTART
  }
}

export const input = (number) => {
	return{
		type: INPUT,
		number: number
	}
}