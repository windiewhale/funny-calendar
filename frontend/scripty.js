function loadEvent() {
    let rootElement = document.getElementById("root");

    const year = [ {
            name: "January",
            id: "jan",
            mth: 01,
            days: 31,
        }, {
            name: "February",
            id: "feb",
            mth: 02,
            days: 28
        }, {
            name: "March",
            id: "mar",
            mth: 03,
            days: 31
        }, {
            name: "April",
            id: "apr",
            mth: 04,
            days: 30
        }, {
            name: "May",
            id: "may",
            mth: 05,
            days: 31
        }, {
            name: "June",
            id: "jun",
            mth: 06,
            days: 30
        }, {
            name: "July",
            id: "jul",
            mth: 07,
            days: 31
        }, {
            name: "August", 
            id: "aug",
            mth: 08,
            days: 31
        }, {
            name: "September",
            id: "sep",
            mth: 09,
            days: 30
        }, {
            name: "October",
            id: "oct",
            mth: 10,
            days: 31
        }, {
            name: "November",
            id: "nov",
            mth: 11,
            days: 30
        }, {
            name: "December",
            id: "dec",
            mth: 12,
            days: 31
        }
    ];

    let month = function (mth, name, days) {
        return `
            <section id=${mth} class="month">
            <div>
                <time datetime="2022">2022</time>
                <time datetime="2022-${mth}">${name}</time>
                <time datetime="2022-${mth}-${days}">${days}</time>
            </div>
            </section>
            `;
    }
        
    //tried to insert all to rootElement, but got [object HTMLDivElement] at the beginning, therefore create an other section to contain months.
    let sectionElements = function(yearArray) {
        
        let monthContainer = `<div class="container">`;
        
        for (const monthList of yearArray) {
            let dayCount = null;
            monthContainer += month(monthList.mth, monthList.name, dayCount);

            for (i = 0; i <= monthList.days; i++) {
                dayCount = i+1;
                console.log(dayCount);
            }
        }    
    
    
    
    monthContainer += `</div>`;
    return monthContainer
    }

    rootElement.insertAdjacentHTML("beforeend", sectionElements(year))



   
};

window.addEventListener("load", loadEvent);



//---------------------------another try that lists each days of jan, but only jan--------------------

function loadEvent() {
    let rootElement = document.getElementById("root");

    const year = [ {
            name: "January",
            id: "jan",
            mth: "01",
            days: 31,
        }, {
            name: "February",
            id: "feb",
            mth: "02",
            days: 28
        }, {
            name: "March",
            id: "mar",
            mth: "03",
            days: 31
        }, {
            name: "April",
            id: "apr",
            mth: "04",
            days: 30
        }, {
            name: "May",
            id: "may",
            mth: "05",
            days: 31
        }, {
            name: "June",
            id: "jun",
            mth: "06",
            days: 30
        }, {
            name: "July",
            id: "jul",
            mth: "07",
            days: 31
        }, {
            name: "August", 
            id: "aug",
            mth: "08",
            days: 31
        }, {
            name: "September",
            id: "sep",
            mth: "09",
            days: 30
        }, {
            name: "October",
            id: "oct",
            mth: "10",
            days: 31
        }, {
            name: "November",
            id: "nov",
            mth: "11",
            days: 30
        }, {
            name: "December",
            id: "dec",
            mth: "12",
            days: 31
        }
    ];

    let month = function (mth, name, day) {
        return `
            <div>
                <time datetime="2022">2022</time>
                <time datetime="${mth}">${name}</time>
                <time datetime="${day}">${day}</time>
            </div>
        `;
    }
        
    let sectionElements = function(yearArray) {
        
        for (const monthList of yearArray) {
           
            let monthContainer = `<section id=${monthList.name}>`;
            let dayCount = "";
            
            for (i = 1; i <= monthList.days; i++) {
                dayCount =+ i
                monthContainer += month(monthList.mth, monthList.name, dayCount);
            }
            monthContainer += `</section>`;
            return monthContainer
        }  
        
      
    }
    rootElement.insertAdjacentHTML("beforeend", sectionElements(year))

};