import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllData } from '../actions/action_getAllData';
import { get2015Data } from '../actions/action_get2015data';
import { get2016Data } from '../actions/action_get2016data';

class RadioButtons extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { getAllStudentDataAction, get2015StudentDataAction, get2016StudentDataAction } = this.props;
		return (
			<div>
				<h3>Years:</h3>
				<div>
					<input
						type="radio"
						id="contactChoice1"
						name="contact"
						value="email"
						onClick={getAllStudentDataAction}
					/>
					<label for="contactChoice1">All</label>
				</div>
				<div>
					<input
						type="radio"
						id="contactChoice2"
						name="contact"
						value="phone"
						onClick={get2015StudentDataAction}
					/>
					<label for="contactChoice2">2015</label>
				</div>
				<div>
					<input
						type="radio"
						id="contactChoice3"
						name="contact"
						value="mail"
						onClick={get2016StudentDataAction}
					/>
					<label for="contactChoice3">2016</label>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllStudentDataAction: () => dispatch(getAllData()),
		get2015StudentDataAction: () => dispatch(get2015Data()),
		get2016StudentDataAction: () => dispatch(get2016Data())
	};
};

const mapStateToProps = state => {
	return {
		allDataFromReducer: state.allCourseData,
		all2015DataFromReducer: state.data2015Course,
		all2016DataFromReducer: state.data2016Course
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtons);
