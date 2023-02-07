

export function OrderPages(Order, recipes) {
    switch (Order) {
        case "asc":
            return recipes.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0));

        case "desc":
            return recipes.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0)).reverse()

        case "dietasasc":
            return recipes.sort((a, b) => (a.diets.length > b.diets.length) ? 1 : ((b.diets.length > a.diets.length) ? -1 : 0))

        case "dietasdesc":
            return recipes.sort((a, b) => (a.diets.length > b.diets.length) ? 1 : ((b.diets.length > a.diets.length) ? -1 : 0)).reverse()


        default:
            return console.log("algo salio mal");
       
    }
}
