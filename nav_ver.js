document.addEventListener("DOMContentLoaded", function() {
    // Tangkap elemet semua lement
    const catalogToggle = document.querySelector('.catalog-toggle');
    const submenuWrapper = document.querySelector('.submenu-wrapper');
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    
    if (hamburger && sidebar && overlay) {

        hamburger.addEventListener('click', function() {
            // Tambah atau hapus class "show" pada sidebar untuk menggesernya
            sidebar.classList.toggle('show');
            // Tambah atau hapus class "active" pada hamburger untuk mengubah icon jadi X
            hamburger.classList.toggle('active');
            overlay.classList.toggle('show');

        });

        overlay.addEventListener('click', function(){
            
            sidebar.classList.remove('show');
            hamburger.classList.remove('active');
            overlay.classList.remove('show');
        });
    } 

    if (catalogToggle && submenuWrapper) {
        catalogToggle.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah halaman melompat ke atas
            // Buka - Tutup Sub Menu
            submenuWrapper.classList.toggle('open')
            // Putar Panah
            catalogToggle.classList.toggle('active')
        });

    } else {
        console.error("Elemen .catalog-toggle atau .submenu-wrapper tidak ditemukan di HTML")
    }
});