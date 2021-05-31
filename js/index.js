// CONDITIONAL UI

const signBoard = document.querySelector(".carousel-hide");
const logo = document.querySelector("#logout-btn");
const loginNavs = document.querySelectorAll(".login-nav");
const setupUI = (user) => {
  if (user) {
    if (loginNavs.length != 0)
      loginNavs.forEach((nav) => {
        nav.style.display = "block";
      });
    if (signBoard != null) signBoard.style.display = "none";
    if (logo != null) logo.style.display = "block";
  } else {
    if (loginNavs != null)
      loginNavs.forEach((nav) => {
        nav.style.display = "none";
      });
    if (signBoard != null) signBoard.style.display = "block";
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
