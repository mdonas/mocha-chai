import { should } from "chai";
should()
let foo = 'bar'
    , beverages = { tea: ['chai', 'matcha', 'oolong'] };
describe("Pruebas", function () {
    it("Primera prueba", function () {
        foo.should.be.a('string');
    })
    it("Segunda prueba", function () {
        foo.should.equal('bar');
    })
    it("Tercera prueba", function () {
        foo.should.have.lengthOf(3);
    })
    it("Cuarta prueba", function () {
        beverages.should.have.property('tea').with.lengthOf(2);
    })

})
