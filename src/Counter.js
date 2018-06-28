import React from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  pause,
  resume,
  restart,
  input
} from './module'


const mapStateToProps = state => {
  return {
    count: state.count,
    txt: state.txt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    pause: () => {
      dispatch(pause())
    },
    resume: () => {
      dispatch(resume())
    },
    restart: () => {
      dispatch(restart())
    },
    input: (info) => {
    	dispatch(input(info))
    }
  }
}

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleChange = (ev) => {
		if (ev.target.value!==null) {
			this.props.input(parseInt(ev.target.value));	
		} 

		// this.setState({
		// 	input: ev.target.value
		// });
	}

  render() {
  	console.log(this.props);
    return (
    	<section style={styles.container}>
		    <div>
		      <h2 style={styles.tl}>Counter</h2>
		      <input onChange={this.handleChange} type='number' value={this.props.txt} style={styles.ip}></input>
		      <div>
		        <button onClick={this.props.increment} style={styles.bt}>+</button>
		        <button onClick={this.props.decrement} style={styles.bt}>-</button>
		      </div>
		    </div>
		      <span style={styles.count}>{this.props.count}</span>
		      <div>
			      <button onClick={this.props.pause}>Pause</button>
			      <button onClick={this.props.resume}>Resume</button>
			      <button onClick={this.props.restart}>Restart</button>
		      <div>
		      </div>
		    </div>
      </section>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 200
  },
  tl: {
  	textAlign: 'center'
  },
  ip: {
  	fontSize: '1rem',
  	textAlign: 'center',
  	border: 'none',
  	borderBottom: 'solid 1px black',
  	marginBottom: '10px'
  },
  bt:{
  	fontSize: '1.5rem',
  	width: '50%',
  	padding: 0
  },
  count: {
  	margin: '50px 0px',
  	fontSize: '4rem'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)