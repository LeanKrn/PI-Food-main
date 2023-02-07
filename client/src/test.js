


const verificationDiets = (result, diets) => {
    let respuesta = []
    for (let i = 0; i < diets.length; i++) {
        respuesta.push(result.receta.diets.includes(diets[i]))
    }
    return respuesta
}


const currentPost2 = () => {
    let result = allRecipes
    if (OrderPage !== "-") { result = OrderPages(OrderPage, allRecipes).slice(firtsPostIndex, lastPostIndex); }
    if ("marcado alguna dieta") { result = verificationDiets(result, diets) }

    return result.slice(firtsPostIndex, lastPostIndex);
}




const currentPost = () => {
    if (OrderPage !== "-") {
        return OrderPages(OrderPage, allRecipes).slice(firtsPostIndex, lastPostIndex);
    } else {
        return allRecipes.slice(firtsPostIndex, lastPostIndex);
    }
}



const handleDiets = (event) => {
    const { value } = event.target
    !dietSelect.includes(value) ? dietSelect.push(value) :
        setDietSelect({
            ...values,
            diets: diets.filter(valor => valor !== value),
        })
}