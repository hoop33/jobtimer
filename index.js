"use strict";

const NANOSECONDS_PER_MILLISECOND = 1000000;

exports.startTimedTask = (options) => {
  return {
    ...options,
    start: process.hrtime.bigint(),
  };
};

exports.endTimedTask = (task) => {
  const end = process.hrtime.bigint();
  task = task || { msg: "end without start", end };
  const tpt = task.start
    ? Number(end - task.start) / NANOSECONDS_PER_MILLISECOND
    : 0;
  delete task.start;
  return JSON.stringify(
    {
      ...task,
      tpt,
    },
    (_, value) => (typeof value === "bigint" ? value.toString() : value)
  );
};
