   // Welcome Popup
    document.addEventListener('DOMContentLoaded', function() {
      // Show popup on page load
      document.getElementById('welcomePopup').classList.remove('hidden');
      
      // Close popup when button is clicked
      document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('welcomePopup').classList.add('hidden');
      });
    });

    // Chart initialization
    const ctx = document.getElementById('carbonChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        datasets: [{
          label: 'Embodied Carbon',
          data: [549, 875, 617, 506, 550, 881, 539, 607],
          backgroundColor: '#6b3734',
          borderRadius: 5
        }, {
          label: 'Target',
          data: [278, 36, 185, 191, 122, 269, 82, 528],
          backgroundColor: '#c9a6a3',
          borderRadius: 5
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Embodied carbon intensity (kgCO₂e/m²)' }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });

    // Notification Panel Toggle
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationPanel = document.getElementById('notificationPanel');
    const closeNotifications = document.getElementById('closeNotifications');

    notificationBtn.addEventListener('click', () => {
      notificationPanel.classList.toggle('hidden');
    });

    closeNotifications.addEventListener('click', () => {
      notificationPanel.classList.add('hidden');
    });

    // Add Brand Functionality
    const addBrandBtn = document.getElementById('addBrandBtn');
    const addBrandForm = document.getElementById('addBrandForm');
    const cancelAddBrand = document.getElementById('cancelAddBrand');
    const saveBrand = document.getElementById('saveBrand');
    const brandList = document.getElementById('brandList');

    addBrandBtn.addEventListener('click', () => {
      addBrandForm.classList.toggle('hidden');
    });

    cancelAddBrand.addEventListener('click', () => {
      addBrandForm.classList.add('hidden');
    });

    saveBrand.addEventListener('click', () => {
      const brandName = document.getElementById('brandName').value;
      const brandColor = document.getElementById('brandColor').value;
      
      if (brandName) {
        const newBrand = document.createElement('div');
        newBrand.className = 'flex justify-between items-center bg-gray-800 rounded-xl p-3 hover:bg-gray-750 transition-colors';
        newBrand.innerHTML = `
          <div class="flex items-center gap-3">
            <input type="checkbox" class="accent-purple-600 w-5 h-5">
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 rounded-full" style="background-color: ${brandColor}"></div>
              <span>${brandName}</span>
            </div>
          </div>
          <i class="fa-solid fa-sliders text-gray-400 hover:text-white cursor-pointer"></i>
        `;
        
        brandList.appendChild(newBrand);
        document.getElementById('brandName').value = '';
        addBrandForm.classList.add('hidden');
      }
    });
