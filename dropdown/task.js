document.addEventListener('DOMContentLoaded', function () {
    let dropdown = document.querySelector('.dropdown');
    let dropdownValue = dropdown.querySelector('.dropdown__value');
    let dropdownList = dropdown.querySelector('.dropdown__list');
    let dropdownItems = dropdown.querySelectorAll('.dropdown__item');

    function toggleDropdown() {
        dropdownList.classList.toggle('dropdown__list_active');
    }

    function selectItem(event) {
        event.preventDefault(); 
        dropdownList.classList.remove('dropdown__list_active');
        let newValue = event.target.textContent;
        dropdownValue.textContent = newValue;
    }

    dropdownValue.addEventListener('click', toggleDropdown);

    dropdownItems.forEach(function (item) {
        item.addEventListener('click', selectItem);
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});
