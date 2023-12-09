const genNews = document.querySelector(".general-news");
const healthNews = document.querySelector(".health-news");
const scienceNews = document.querySelector(".science-news");
const sportsNews = document.querySelector(".sports-news");
const techNews = document.querySelector(".technology-news");
const entertainNews = document.querySelector(".entertainment-news");
const businessNews = document.querySelector(".business-news");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=general", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            genNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                genNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));
    
  
        
    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=health", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            healthNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                healthNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));

    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=science", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            scienceNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                scienceNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));

    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=sports", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            sportsNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                sportsNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));

    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=technology", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            techNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                techNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));

    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=entertainment", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            entertainNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                entertainNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));

    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=entertainment", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            entertainNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                entertainNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));

    fetch("https://newsapi.org/v2/top-headlines?apiKey=56b4a5a0f3fd472193e8230faf204471&country=in&category=business", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            businessNews.innerHTML = '';
    
            data.articles.forEach(article => {
                var paragraph = document.createElement('p');
                
                if(article.description == null){
                    paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                else{
                    paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                }
                businessNews.appendChild(paragraph);
            });
        })
        .catch(error => console.log('error', error));

        function searchNews() {
            // Get user input from the text box
            var userInput = document.getElementById('searchInput').value;
            const serachArticle = document.querySelector(".search-news");
            // Construct the API URL with the user input
            var apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(userInput)}&apiKey=56b4a5a0f3fd472193e8230faf204471`;

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            // Fetch data using the constructed API URL
            fetch(apiUrl, requestOptions)
                .then(response => response.json())
                .then(data => {
                    serachArticle.innerHTML = '';
            
                    data.articles.forEach(article => {
                        var paragraph = document.createElement('p');
                        
                        if(article.description == null){
                            paragraph.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
                        }
                        else{
                            paragraph.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
                        }
                       serachArticle.appendChild(paragraph);
                    });
                })
                .catch(error => console.log('error', error));
        }
    