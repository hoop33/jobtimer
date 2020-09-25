const { startTimedTask, endTimedTask } = require("../index");

describe("endTimedTask", () => {
  it("should not throw when task is null", () => {
    expect(function () {
      endTimedTask(null);
    }).not.toThrow();
  });

  it("should have tpt field when started and ended", () => {
    const start = startTimedTask();
    const result = endTimedTask(start);
    expect(result).toContain('"tpt":');
  });

  it("should add string fields when added", () => {
    const start = startTimedTask();
    start.foo = "bar";
    const result = endTimedTask(start);
    expect(result).toContain('"foo":"bar"');
  });

  it("should add number fields when added", () => {
    const start = startTimedTask();
    start.foo = 123;
    const result = endTimedTask(start);
    expect(result).toContain('"foo":123');
  });

  it("should convert value to string when bigint", () => {
    const start = startTimedTask();
    start.foo = 123n;
    const result = endTimedTask(start);
    expect(result).toContain('"foo":"123"');
  });
});
