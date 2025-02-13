import { expect, should } from "chai";
should()
let foo = 'bar'
    , beverages = { tea: ['chai', 'matcha', 'oolong'] }
    , nula = null
    , falsa = true

describe("Pruebas", () => {
    it("Primera prueba", () => {
        foo.should.be.a('string', "No es el tipo deseado")
    })
    it("Segunda prueba", () => {
        // foo.should.equal('bar', "No es el contenido esperado");
        falsa.should.not.be.ok
        // expect(falsa, "Es falsy").to.be.ok
    })
    it("Tercera prueba", () => foo.should.have.lengthOf(3))

    it("Cuarta prueba", () => {
        beverages.should.have.property('tea').with.lengthOf(3, "No ha sido correcto la primera");
    })
    it("Prueba de Null", () => {
        expect(nula).to.be.null
    })

})
