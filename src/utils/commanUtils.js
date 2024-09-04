export const getRadius = () => {
    return Math.floor(Math.random() * 41) + 10;
}

export const getColor = () => {
    const latter = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += latter[Math.floor(Math.random() * 16)]
    }
    return color;
}