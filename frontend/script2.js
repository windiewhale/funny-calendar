const init = () => {
    // after #root has been created we select it
    let root = document.querySelector('#root');

    const year = [
        {
            name: "January",
            id: "jan",
            mth: 1,
            days: 31
        },
        {
            name: "February",
            id: "feb",
            mth: 2,
            days: 28
        }, {
            name: "March",
            id: "mar",
            mth: 3,
            days: 31
        }, {
            name: "April",
            id: "apr",
            mth: 4,
            days: 30
        }, {
            name: "May",
            id: "may",
            mth: 5,
            days: 31
        }, {
            name: "June",
            id: "jun",
            mth: 6,
            days: 30
        }, {
            name: "July",
            id: "jul",
            mth: 7,
            days: 31
        }, {
            name: "August", 
            id: "aug",
            mth: 8,
            days: 31
        }, {
            name: "September",
            id: "sep",
            mth: 9,
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
   
   
    // run the addCard function
    addCard(1, root);



    //add dayCards 

    function addCard(i, root) {

        root.insertAdjacentHTML("befoeend", `
                <div class="card" >
                    <time datetime="2022">2022</time>
                    <time datetime="2022-nbr${month.mth}">${month.name}</time>
                    <time datetime="2022-nbr${month.mth}-nbr${i}">${i}</time>
                </div>    
        `);
     
        
    };