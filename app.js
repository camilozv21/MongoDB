window.addEventListener('load', () => {
    let offset = 0;
    const limit = 12; // Número de resultados por página

    function loadResults() {
        offset += limit;
        const endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=fRosJIDpbrsMJEpcfjX9ckflY6Woj28R&tag=&rating=g&limit=${limit}&offset=${offset}`

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {

                const consulta = document.querySelector('.consulta');

                while (consulta.firstChild) {
                    consulta.removeChild(consulta.firstChild);
                }

                data.data.forEach(el => {
                    const newConsult = document.createElement('article');
                    newConsult.innerHTML += `<h3>${el.username ? el.username : 'Sin titulo :c'}</h3>
                                            <img src="${el.images.downsized.url}"></img>
                                            <a href="${el.bitly_url}">LINK AL GIF</a>`
                    consulta.appendChild(newConsult);
                });
            })
            .catch(error => console.log(error))
    }

    loadResults()

    function loadMore() {
        offset += limit;
        loadResults()
    }

    const nextContent = document.querySelector('#loadMoreButton')
    nextContent.addEventListener('click', loadMore)
})
// FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69
//api_key=fRosJIDpbrsMJEpcfjX9ckflY6Woj28R&tag=&rating=g
