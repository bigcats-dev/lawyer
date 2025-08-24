// navTop.js
document.addEventListener("DOMContentLoaded", function () {
  const navTopHTML = `
  <div class="nav-top">
    <div class="container-fluid mb-x">
      <div class="row">
        <div class="col-6 ">
        </div>
        <div class="col-6 text-end">
          <ul class="user-il"> 
            <li>
              <div class="dropdown user-dropdown alarm">
                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">
                  <p>13</p>
                  <span class="material-symbols-outlined">notifications</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="#" class="dropdown-item">
                    <div class="alarm-box">
                      <img src="images/3_avatar-512.webp" alt="">
                      <h4>Brad Diesel</h4>
                      <h5>Call me whenever you can Call me whenever you can</h5>
                      <h6>
                        <span class="material-symbols-outlined">schedule</span> 4 Hours ago
                      </h6>
                    </div>
                  </a>
                  <a href="#" class="dropdown-item">
                    <div class="alarm-box">
                      <img src="images/3_avatar-512.webp" alt="">
                      <h4>Brad Diesel</h4>
                      <h5>Call me whenever you can Call me whenever you can</h5>
                      <h6>
                        <span class="material-symbols-outlined">schedule</span> 4 Hours ago
                      </h6>
                    </div>
                  </a>
                  <a href="#" class="dropdown-item">
                    <div class="alarm-box">
                      <img src="images/3_avatar-512.webp" alt="">
                      <h4>Brad Diesel</h4>
                      <h5>Call me whenever you can Call me whenever you can</h5>
                      <h6>
                        <span class="material-symbols-outlined">schedule</span> 4 Hours ago
                      </h6>
                    </div>
                  </a>
                  <hr>
                  <a href="#" class="dropdown-item text-center">See All Messages</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#"><img src="images/avatar.jpg" alt="img-name" class="img-name"></a>
            </li>
            <li>
              <div class="dropdown user-dropdown">
                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">Admin</a>
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">My profile</a>
                  <a href="#" class="dropdown-item">Settings</a>
                  <a href="login.html" class="dropdown-item">Logout</a> 
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid pc-x menu-top-mb">
      <div class="icon-menu">
        <div class="menux">
          <span class="material-symbols-outlined">menu</span>
        </div>
        <div class="logo">
          <img src="images/logo.png" alt="">
        </div>
      </div>
      <div class="avatar-user">
        <img src="images/avatar.jpg" class="u-img">
        <div class="more-vert">
          <div class="dropdown user-dropdown">
            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">
              <span class="material-symbols-outlined">more_vert</span>
            </a>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">My profile</a>
              <a href="#" class="dropdown-item">Settings</a>
              <a href="login.html" class="dropdown-item">Logout</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = navTopHTML; 
  document.getElementById('nav-top-placeholder').appendChild(container);

});
