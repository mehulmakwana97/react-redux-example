const tasks = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TASK':
			return [
				...state,
				{
					task: action.task
				}
			];

		default:
			return state;
	}
}

export default tasks;