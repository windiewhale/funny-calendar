const year = [ {
        name: "January",
        id: "jan",
        nth: "01",
        days: 31,
    }, {
        name: "February",
        id: "feb",
        nth: "02",
        days: 28
    }, {
        name: "March",
        id: "mar",
        nth: "03",
        days: 31
    }, {
        name: "April",
        id: "apr",
        nth: "04",
        days: 30
    }, {
        name: "May",
        id: "may",
        nth: "05",
        days: 31
    }, {
        name: "June",
        id: "jun",
        nth: "06",
        days: 30
    }, {
        name: "July",
        id: "jul",
        nth: "07",
        days: 31
    }, {
        name: "August", 
        id: "aug",
        nth: "08",
        days: 31
    }, {
        name: "September",
        id: "sep",
        nth: "09",
        days: 30
    }, {
        name: "October",
        id: "oct",
        nth: "10",
        days: 31
    }, {
        name: "November",
        id: "nov",
        nth: "11",
        days: 30
    }, {
        name: "December",
        id: "dec",
        nth: "12",
        days: 31
    }
];

function loadEvent() {
    let rootElement = document.getElementById("root");
    
    (function listDays() {
        for (const monthList of year) {

            let monthContainer = ""
            let dayCount = "";
            
            for (i = 1; i <= monthList.days; i++) {
                dayCount += `
                <div>
                    <time datetime="YYYY" class="year">2022</time>
                    <time datetime="MM" class="mon">${monthList.name}</time>
                    <time datetime="DD" class="day">${i}</time>
                </div>`;
            }
    
            monthContainer += `<section id=${monthList.id} class="month">
                                    <section class="cContainer">
                                    ${dayCount}
                                    </section>
                                </section>`;
            rootElement.insertAdjacentHTML("beforeend", monthContainer)
        } 
    }) ();
    
};

window.addEventListener("load", loadEvent);
