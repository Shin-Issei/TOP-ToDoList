import createProject from "./projectObjects";

const testProj = createProject("TestOne");

testProj.createTodo("TDTit","TDDesc");

console.log(testProj.list);
