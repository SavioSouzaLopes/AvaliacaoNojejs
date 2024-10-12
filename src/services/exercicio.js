class ServiceExercicio {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) + Number(num2);
    }

    Sub(num3, num4) {
        if (isNaN(num3) || isNaN(num4)) {
            throw new Error('Informe um número')
        }
        return Number(num3) - Number(num4);
    }
    
    Div(num5, num6) {
        if (isNaN(num5) || isNaN(num6)) {
            throw new Error('Informe um número')
        }
        return Number(num5) / Number(num6);
    }

    Mult(num7, num8) {
        if (isNaN(num7) || isNaN(num8)) {
            throw new Error('Informe um número')
        }
        return Number(num7) * Number(num8);
    }

    Pot(num9, num10) {
        if (isNaN(num9) || isNaN(num10)) {
            throw new Error('Informe um número')
        }
        return Math.pow(num9,num10);
    }

    Rad(num11) {
        if (isNaN(num11)) {
            throw new Error('Informe um número')
        }
        return Math.sqrt(num11);
    }
}

// module.exports = ServiceExercicio -> const exercicio = new ServiceExercicio()
module.exports = new ServiceExercicio()
