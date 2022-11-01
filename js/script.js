window.addEventListener('DOMContentLoaded', () => {

///////////////////// Tabs
function tabs(tabcontent, tabheader__items, tabheader__item){
    const tabContent = document.querySelectorAll(tabcontent),
          tabWrapper = document.querySelector(tabheader__items),
          tabItem = tabWrapper.querySelectorAll(tabheader__item);
        
    function hideTabContent(){
        tabContent.forEach( (item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabItem.forEach( (item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabs(i = 0){
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabItem[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabs();

    tabWrapper.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')){

            tabItem.forEach( (item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabs(i);
                }
            });
        }
    }); 
}

    tabs('.tabcontent', '.tabheader__items', '.tabheader__item');
});