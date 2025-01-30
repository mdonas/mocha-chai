import assert from 'assert';
import * as main from "../main.js"

//Results
const helloWorldText = main.helloWorld();
const subtractionResult = main.substraction(5, 1)
const arrrayOfNumbersResult = main.arrrayOfNumbers()

describe('Main Suite', function () {
    describe('Hello World Funcion -  Test Case', function () {
        it('Hello World text is as expected', function () {
            assert.equal(helloWorldText, 'htu puta madre')
        })
    })

})