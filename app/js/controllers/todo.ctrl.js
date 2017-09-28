angular.module('app').controller('TodoCtrl', function TodoCtrl() {
	var todo = this; // this == $scope because we use the controllerAs definition

	todo.addTask = addTask;
	todo.remaining = remaining;
	todo.archive = archive;

	todo.tasks = [{
		text: "learn angular",
		done: true
	}, {
		text: "build an angular app",
		done: false
	}];


	/*** Function definitions ***/
	function addTask() {
		todo.tasks.push({
			text: todo.taskText,
			done: false
		});
		return todo.taskText = "";
	};

	function remaining() {
		var count;
		count = 0;
		angular.forEach(todo.tasks, function(task) {
			return count += (task.done ? 0 : 1);
		});
		return count;
	};

	function archive() {
		var oldTasks;
		oldTasks = todo.tasks;
		todo.tasks = [];
		return angular.forEach(oldTasks, function(task) {
			if(!task.done) {
				return todo.tasks.push(task);
			}
		});
	};
});
