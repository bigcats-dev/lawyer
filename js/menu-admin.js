function renderAdminMenu() {
const currentPage = window.location.pathname.split("/").pop();
const menuHtml = `
    <ul>
        <li class="${currentPage === 'dashboard.html' ? 'active' : ''}">
            <a href="dashboard.html"> 
            <i>Dashboard</i>
            <span class="material-symbols-rounded">swap_driving_apps_wheel</span>
            </a>
        </li>
        <li class="${currentPage === 'shop-list.html' ? 'active' : ''}">
            <a href="shop-list.html"> 
            <i>ร้านค้า</i>
            <span class="material-symbols-outlined">store</span>
            </a>
        </li> 
        <li class="${currentPage === 'order-history-list.html' ? 'active' : ''}">
            <a href="order-history-list.html"> 
            <i>ประวัติออเดอร์</i>
            <span class="material-symbols-outlined">moped</span>
            </a>
        </li> 
        <li class="${currentPage === 'report.html' ? 'active' : ''}">
            <a href="report.html"> 
            <i>รายงาน</i>
            <span class="material-symbols-outlined">article</span>
            </a>
        </li> 
        <li class="sub ${['facilities-setting.html','user.html', 'alert-email.html','property-deed-type','property-type.html','land-colors-type.html'].includes(currentPage) ? 'active open' : ''}">
            <div> 
                <i>ตั้งค่าระบบ</i>
                <span class="material-symbols-rounded">manage_accounts</span>
            </div>
            <ul> 
                <li class="${currentPage === 'user.html' ? 'active' : ''}"><a href="user.html">สิทธิ์ผู้ใช้</a></li>
                <li class="${currentPage === 'alert-email.html' ? 'active' : ''}"><a href="alert-email.html" >แจ้งเตือน / อีเมล</a></li>
            </ul>
        </li>
    </ul>
    `;
    document.querySelector(".menu-dib").innerHTML = menuHtml; 
    document.querySelectorAll('.menu-dib .sub > div').forEach(div => {
        div.addEventListener('click', () => {
            div.parentElement.classList.toggle('open');
            div.parentElement.classList.toggle('active');
        });
    });
}
document.addEventListener("DOMContentLoaded", renderAdminMenu);