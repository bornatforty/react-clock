import React, { Component } from 'react'

class Clock extends Component {
	pad = (value) => {
    value = '' + value
    return value.length === 1 ? '0' + value : value //or if(value.length === 1){return '0'+value}else{return value}
  }
render() {
	return (
		<div className="clock">
        {this.pad(this.props.hours)}:{this.pad(this.props.minutes)}:{this.pad(this.props.seconds)}
        </div>
        )
}
}

export default Clock