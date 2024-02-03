const products = [
    {
        id: '1',
        name: 'Alex Freidig',
        price: 5000,
        category: 'musica',
        img: 'https://i.scdn.co/image/ab67616100005174e53ebbb97db6836d054f8584',
        stock: 446,
        description: 'Show de Alex Freidig en el Teatro Español de Pigüé'
    },
    {
        id: '2',
        name: 'Valentina Etchebest',
        price: 5000,
        category: 'musica',
        img: 'https://eldebatecdn.eleco.com.ar/media/2023/08/gran_presentacion_de_la_cantante_de_tango_valentina_etchebest.jpg',
        stock: 446,
        description: 'Show de Valentina Etchebest en el Teatro Español de Pigüé'
    },
    {
        id: '3',
        name: 'LilyPalooza',
        price: 3000,
        category: 'teatro',
        img: 'https://www.fmaveyron.com.ar/panel/adjuntos/a684_teatro-la-zorrilla-promo-.jpg',
        stock: 446,
        description: 'Aniversario de La Zorrilla en el Teatro Español de Pigüé'
    },
    {
        id: '4',
        name: 'Inicio de temporada',
        price: '0',
        category: 'sociales',
        img: 'https://compras.saavedra.gob.ar/wp-content/uploads/2023/06/20230708-Teatro.jpg',
        stock: 446,
        description: 'Presentación de la temporada 2024 del Teatro Español Pigüé'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}