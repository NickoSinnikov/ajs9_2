import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../app";
test("show get data from array buffer", () => {
  const convertArrayBuffer = new ArrayBufferConverter();
  convertArrayBuffer.load(getBuffer());
  let result = convertArrayBuffer.toString();
  expect(result).toEqual(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  );
});
