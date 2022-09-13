export function buyCake() {
    return { type: 'Buy-Cake' }
}

export function buyIceCream() {
    return { type: 'Buy-IceCream' }
}

export function buyMoreIceCream(cakevalue) {
    return { type: 'Buy-More-IceCream', payload: cakevalue }
}
