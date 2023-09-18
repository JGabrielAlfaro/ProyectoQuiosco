export const formatearDinero = cantidad => {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })
}

// .toLocaleString("en-US", {style:"currency", currency:"USD"});

