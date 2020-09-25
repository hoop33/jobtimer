const { startTimedJob, endTimedJob } = require("../index");

describe("endTimedJob", () => {
  it("should not throw when job is null", () => {
    expect(function () {
      endTimedJob(null);
    }).not.toThrow();
  });

  it("should have tpt field when started and ended", () => {
    const start = startTimedJob();
    const result = endTimedJob(start);
    expect(result).toContain('"tpt":');
  });

  it("should add string fields when added", () => {
    const start = startTimedJob();
    start.foo = "bar";
    const result = endTimedJob(start);
    expect(result).toContain('"foo":"bar"');
  });

  it("should add number fields when added", () => {
    const start = startTimedJob();
    start.foo = 123;
    const result = endTimedJob(start);
    expect(result).toContain('"foo":123');
  });

  it("should convert value to string when bigint", () => {
    const start = startTimedJob();
    start.foo = 123n;
    const result = endTimedJob(start);
    expect(result).toContain('"foo":"123"');
  });
});
