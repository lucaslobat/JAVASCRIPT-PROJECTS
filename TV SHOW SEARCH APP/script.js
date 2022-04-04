/* ##### VARIABLES ##### */
let query;
const apiTvMaze = 'https://api.tvmaze.com/search/shows';
const input_search = document.querySelector('.input_search');
const input_form = document.querySelector('#input_form');
const tvShows_section = document.querySelector(".tv_shows");


/* ##### EVENT LISTENERS ##### */
input_form.addEventListener('submit',async (e) => {

    e.preventDefault();
    document.querySelector('.tvshow_container').remove();
    
    query = input_form.elements.q.value;

    const response = await axios.get(`${apiTvMaze}?q=${query}`)
    .then(result =>  {

        const tvshow_container = document.createElement('div');
        tvshow_container.classList.add('tvshow_container','flex');

        tvShows_section.append(tvshow_container);

        const tvShowList = result.data;

        tvShowList.forEach(tvShow => {
            const tvShowDiv = document.createElement('div');
            tvShowDiv.classList.add('tvshow_card','flex');

            const tvShowImage = document.createElement('img');
            
            if(tvShow.show.image){
                tvShowImage.src = tvShow.show.image.medium;
            } else {
                tvShowImage.src = "images/image-not-found.jpg";
            }
       
            tvShowDiv.innerHTML = tvShowImage.outerHTML + tvShow.show.name;

            tvshow_container.append(tvShowDiv);
        })
    })
    .catch(err => {
        console.log(err)
    })

    input_form.elements.q.value = "";

});
