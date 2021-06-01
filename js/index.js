// CONDITIONAL UI

const signBoard = document.querySelector(".carousel-hide");
const logo = document.querySelector("#logout-btn");
const loginNavs = document.querySelectorAll(".login-nav");

// INITIALLY NOT SHOWING ANYTHING

const setupUI = (user) => {
  if (user) {
    if (loginNavs.length != 0)
      loginNavs.forEach((nav) => {
        nav.style.display = "block";
      });
    if (signBoard != null) signBoard.style.display = "none";
    if (logo != null) logo.style.display = "block";
  } else {
    if (signBoard != null) signBoard.style.display = "block";
    if (loginNavs != null)
      loginNavs.forEach((nav) => {
        nav.style.display = "none";
      });
    if (logo != null) logo.style.display = "none";
  }
};

// Setup BIO
const appendingDIV = document.querySelector(".append-here");
const setupBIO = (data) => {
  // console.log(data, "hello");
  console.log(data, "helloooo");
  const info = data.data();
  console.log(info);
  const appendingBio = `
      <p class="col-md-8 fs-4">${info.email}</p>
      <p class="col-md-8 fs-4">${info.dateOfBirth}</p>
    `;
  if (appendingDIV) appendingDIV.innerHTML = appendingBio;
};

// SETUP ACTIVITIES
const appendActivityDiv = document.querySelector(".append-activity-div");
const setupActivities = (data) => {
  // console.log(data);
  let finalAppend = "";
  data.forEach((doc) => {
    const acti = doc.data();
    console.log(acti);
    const str = `<div class="col-lg-4 col-md-6 mb-2">
              <div class="card .h-100">
                <div class="card-header text-white bg-secondary">
                  <h3>${acti.Sport}</h3>
                  <small>${acti.Location}</small>
                </div>
                <div class="card-body">
                  <p>Date: ${acti.date}</p>
                  <p>Start Time: ${acti.StartTime}</p>
                  <p>End Time: ${acti.EndTime}</p>
                </div>
              </div>
            </div>`;
    finalAppend += str;
  });
  if (appendActivityDiv) appendActivityDiv.innerHTML = finalAppend;
};

// NEWS API

const setupNews = () => {
  //   const apiKey = `6115dd066a3541ea9ad405b95ec182ec`;
  //   const url = `
  // https://newsapi.org/v2/top-headlines?language=en&category=sports&pageSize=12&from=2021-05-25&sortBy=publishedAt&apiKey=${apiKey}`;

  const appendDIV = document.querySelector(".appending-div");
  fetch(
    "https://bing-news-search1.p.rapidapi.com/news/search?q=Football%20Cricket%20Tennis%20Golf%20Basketball&safeSearch=Off&textFormat=Raw&originalImg=true&freshness=Day&setLang=EN&count=20",
    {
      method: "GET",
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": "4d8d073680mshae09359c8128f60p1e09dbjsn06938ef7f969",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.value);
      let appendImg = "";
      const articles = data.value;
      console.log(articles);
      let i = 0;
      articles.forEach((article) => {
        console.log(article.url);
        console.log(article.image);
        if (article.image != null && i < 16) {
          i++;
          console.log(article.image.contentUrl);
          appendImg += `<div class="col">
          <div class="card h-100">
            <img src="${article.image.contentUrl}" class="card-img-top" alt="Image does not exist" width="350" height="250" />
            <div class="card-body">
              <h5 class="card-title">${article.name}</h5>
              <p class="card-text">${article.description}</p>
            </div>
            <div class="card-footer bg-transparent"><a href="${article.url}" class="btn btn-outline-secondary">Read more</a></div>
          </div>
        </div>`;
        }
      });
      // console.log(appendImg);
      appendDIV.innerHTML = appendImg;
    });
};
