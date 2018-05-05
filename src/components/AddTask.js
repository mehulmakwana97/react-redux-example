import React from 'react'
import { connect } from 'react-redux'

class AddTask extends React.Component {
	addTask = () => {

	}

	render() {
		return (
			<div>
				<form onSubmit={this.addTask.bind(this)}>
					<input type="text" name="task_no" ref="task_no" />
					<input type="text" name="date_time" ref="date_time" />
					<textarea name="comment" />
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default connect()(AddTask);