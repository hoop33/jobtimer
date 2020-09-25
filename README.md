# Task Timer

> Times tasks, allows you to add metadata, and collects the task as a JSON string

## Installation

```sh
$ npm install tasktimer
```

## Usage

```javascript
const { startTimedTask, endTimedTask } = require("tasktimer");

// Start a timed task
const start = startTimedTask({ msg: "mytask" });

// Run some long-running task
const result = await longRunningFunction();

// Add result to task
start.result = result;

// Log the results
console.log(endTimedTask(start));
// {"msg":"mytask","result":"myresult","tpt":137}
```

**Note:** `tpt` stands for Total Processing Time.

## License

Copyright &copy; 2020 Rob Warner
Licensed under the [MIT License](https://hoop33.mit-license.org/)

