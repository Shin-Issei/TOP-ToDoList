import createProject from "./projectObjects";
import { makeInput } from "./DOMFunctionality";

const testProj = createProject("TestOne");

testProj.createTodo("TDTit","TDDesc");

console.log(testProj.list);

document.body.append(makeInput())

/* 
    Go to DOM functionality and create a UI
*/