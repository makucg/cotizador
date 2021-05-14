export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export function obtenerPlan(plan) {
    let incremento;

    switch(plan) {
        case 'basico':
            incremento = 1.20;
            break;
        case 'completo':
            incremento = 1.50;
            break;
        default:
            break;
    }
    return incremento;
}

export function capitalize(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}