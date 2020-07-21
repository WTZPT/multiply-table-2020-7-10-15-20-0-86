const main = require("../main");

describe("create multiply table", () => {
  it("should return multiply table when given start is 2 and end is 4", () => {
    const start = 2;
    const end = 4;
    const multiplyTable = main.createMultiplyTable(start, end);
    expect(multiplyTable).toBe("2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16");
  });

  it("should return null when given start is 90 and end is 40",()=>{
    const start = 90;
    const end = 40;
    const multiplyTable = main.createMultiplyTable(start, end);
    expect(multiplyTable).toBe(null);
  });
  
  it("should return null when given start is 0 and end is 40",()=>{
    const start = 0;
    const end = 40;
    const multiplyTable = main.createMultiplyTable(start, end);
    expect(multiplyTable).toBe(null);
  });

});

 