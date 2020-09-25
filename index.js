"use strict";

const NANOSECONDS_PER_MILLISECOND = 1000000;

exports.startTimedJob = (options) => {
  return {
    ...options,
    start: process.hrtime.bigint(),
  };
};

exports.endTimedJob = (job) => {
  const end = process.hrtime.bigint();
  job = job || { msg: "end without start", end };
  const tpt = job.start
    ? Number(end - job.start) / NANOSECONDS_PER_MILLISECOND
    : 0;
  delete job.start;
  return JSON.stringify(
    {
      ...job,
      tpt,
    },
    (_, value) => (typeof value === "bigint" ? value.toString() : value)
  );
};
