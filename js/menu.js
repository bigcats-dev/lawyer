function renderAdminMenu() {
    const currentPage = window.location.pathname.split("/").pop();

    // mapping ให้ law-create.html ถือว่าอยู่ในหมวด law-list.html
    const lawPages = ['law-list.html', 'law-create.html'];

    const menuHtml = `
        <ul>
            <li class="${currentPage === 'dashboard.html' ? 'active' : ''}">
                <a href="dashboard.html"> 
                <i>Dashboard</i>
                <span class="material-symbols-rounded">swap_driving_apps_wheel</span>
                </a>
            </li>
            <li class="${lawPages.includes(currentPage) ? 'active' : ''}">
                <a href="law-list.html"> 
                <i>รายการคดี</i>
                <span class="material-symbols-outlined">gavel</span>
                </a>
            </li> 
            <li class="${currentPage === 'link.html' ? 'active' : ''}">
                <a href="link.html"> 
                <i>Link ที่เกี่ยวข้อง</i>
                <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </li> 
            <li class="${currentPage === 'calendar-list.html' ? 'active' : ''}">
                <a href="calendar-list.html"> 
                <i>ปฏิทิน</i>
                <span class="material-symbols-outlined">calendar_month</span>
                </a>
            </li>  
            <li class="sub ${['external-link.html','external-type.html'].includes(currentPage) ? 'active open' : ''}">
                <div> 
                    <i>ตั้งค่าระบบ</i>
                    <span class="material-symbols-rounded">manage_accounts</span>
                </div>
                <ul>
                    <li class="${currentPage === 'external-link.html' ? 'active' : ''}"><a href="external-link.html" >จัดการ External Link</a></li> 
                    <li class="${currentPage === 'external-type.html' ? 'active' : ''}"><a href="external-type.html" >ประเภท External Link</a></li>
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
