# Job Timer

> Times jobs, allows you to add metadata, and collects the job as a JSON string

## Installation

```sh
$ npm install jobtimer
```

## Usage

```javascript
const { startTimedJob, endTimedJob } = require("jobtimer");

// Start a timed job
const start = startTimedJob({ msg: "myjob" });

// Run some long-running job
const result = await longRunningFunction();

// Add result to job
start.result = result;

// Log the results
console.log(endTimedJob(start));
// {"msg":"myjob","result":"myresult","tpt":137}
```

**Note:** `tpt` stands for Total Processing Time.

## License

Copyright &copy; 2020 Rob Warner
Licensed under the [MIT License](https://hoop33.mit-license.org/)

