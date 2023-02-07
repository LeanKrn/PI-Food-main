
const apiDataReady =  (apiData) => {
    const apimap = apiData.data.results.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets,
        pricePerServing: receta.pricePerServing,
        sourceName: receta.sourceName,
        readyInMinutes: receta.readyInMinutes,
        healthScore: receta.healthScore,
        summary: receta.summary,
        cuisines: receta.cuisines,
        analyzedInstructions: receta.analyzedInstructions
    }))
    return apimap
}
const dbbDataReady = (bdd) => {
    const mapeobdd = bdd.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets?.map((e) => e.diet),
        pricePerServing: receta.pricePerServing,
        sourceName: receta.sourceName,
        readyInMinutes: receta.readyInMinutes,
        healthScore: receta.healthScore,
        summary: receta.summary,
        cuisines: receta.cuisines,
        analyzedInstructions: receta.analyzedInstructions,
    }))
    return mapeobdd
}



const apiDataSimple = (apiData) => {
    const apimap = apiData.data.results.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets,
    }))
    return apimap
}
const mapeobddSimple = (bdd) => {
    const mapeobdd = bdd.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets?.map((e) => e.diet),

    }))
    return mapeobdd
}


module.exports = {
    apiDataReady,
    dbbDataReady,
    apiDataSimple,
    mapeobddSimple
}