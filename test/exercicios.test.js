const ServiceExercicio = require('../src/services/exercicio')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da função somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = ServiceExercicio.Somar(1000, 2000);
        expect(resultado).toBe(3000)
    })
    it('Somar dois números negativos', () => {
        const resultado = ServiceExercicio.Somar(-10, -20);
        expect(resultado).toBe(-30)
    })
    it('Somar um número com uma letra', () => {
        const funSomar = () => ServiceExercicio.Somar(90, 'a');
        expect(funSomar).toThrow('Informe um número')
    })
    it('Somar uma letra com um número', () => {
        const funSomar = () => ServiceExercicio.Somar('b', 20);
        expect(funSomar).toThrow('Informe um número')
    })
    
})

describe('Testes da função Subtrair: ', () => {

    it('Subtrair dois números positivos', () => {
        const resultado = ServiceExercicio.Sub(10, 5);
        expect(resultado).toBe(5)
    })
    it('Subtrair um número com uma letra', () => {
        const funSub = () => ServiceExercicio.Sub(8540, 'g');
        expect(funSub).toThrow('Informe um número')
    })
})

describe('Testes da função Divisão: ', () => {

    it('Dividir dois números positivos', () => {
        const resultado = ServiceExercicio.Div(10, 2);
        expect(resultado).toBe(5)
    })
    it('Dividir um número com uma letra', () => {
        const funDiv = () => ServiceExercicio.Div(1830, 'o');
        expect(funDiv).toThrow('Informe um número')
    })
    
    
})

describe('Testes da função Multiplicação: ', () => {

    it('Multiplicar dois números positivos', () => {
        const resultado = ServiceExercicio.Mult(20, 10);
        expect(resultado).toBe(200)
    })
    it('Multiplicar um número com uma letra', () => {
        const funMult = () => ServiceExercicio.Mult(743, 'q');
        expect(funMult).toThrow('Informe um número')
    })
})

describe('Testes da função Potenciação: ', () => {

    it('Potenciar dois números positivos', () => {
        const resultado = ServiceExercicio.Pot(1, 1);
        expect(resultado).toBe(1)
    })
    it('Potenciar um número com uma letra', () => {
        const funPot = () => ServiceExercicio.Pot(109, 'p');
        expect(funPot).toThrow('Informe um número')
    })
    
})

describe('Testes da função Raiz: ', () => {
    it('raiz do número', () => {
        const resultado = ServiceExercicio.Rad(9);
        expect(resultado).toBe(3)
    })
    it('Raiz de uma letra', () => {
        const funPot = () => ServiceExercicio.Pot('k');
        expect(funPot).toThrow('Informe um número')
    })
})
