
$(document).ready(function() {
    //declaring variables
    let fname = "Ushneet";
    let lname = "Kaur";
    let loginName = "kaurus";
    let sId = "991584914";

    //class for menu categories
    class MenuCategories {
        constructor(num, name) {
            this.num=num;
            this.name=name;
        }
    }

    //populating the array with 4 categories
    //based on the class MenuCategories
    var myCategories = new Array();
	myCategories.push( new MenuCategories("1", "Desert") );
    myCategories.push( new MenuCategories("2", "Vegetable") );
    myCategories.push( new MenuCategories("3", "Pasta") );
    myCategories.push( new MenuCategories("4", "Meat") );

    //class for menu items
    class MenuItems {
        constructor(categoryNum, name, image) {
           this.categoryNum=categoryNum;
           this.name=name;
           this.image=image;
        }
    }

    //populating the array with 8 items
    //based on the class MenuItems
    var myItems = new Array();
	myItems.push( new MenuItems("1", "Cake", "cake.jpg") );
    myItems.push( new MenuItems("1", "Ice-Cream", "iceCream.jpg") );
    myItems.push( new MenuItems("2", "Onion", "onion.jpg") );
    myItems.push( new MenuItems("2", "Tomato", "tomato.jpg") );
    myItems.push( new MenuItems("3", "White Sause Pasta", "whiteSause.jpg") );
    myItems.push( new MenuItems("3", "Red Sause Pasta", "redSause.jpg") );
    myItems.push( new MenuItems("4", "Chicken", "chicken.png") );
    myItems.push( new MenuItems("4", "Bacon", "bacon.jpg") );

    //saving personal variables in LS
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("loginName", loginName);
    localStorage.setItem("sId", sId);

    //populating the h3 tag in header
    $("header h2:first").append(`${fname} ${lname} / ${sId} / A01 `);
    $("header h2:first").addClass("headerStyle");

    //List Section
    //printing the myItems Array
    for(let i of myItems) {
        let out = document.getElementById("itemList");
		out.innerHTML += 
		`<li title= '${i.categoryNum}' > ${i.name} <img src="img/${i.image}"
        width="50px" style="border:2px solid black"> </li>`;
        console.log();
	}

    //Button Section
    //printing the mycategories Array
    for(let c of myCategories) {
        let out = document.getElementById("category");
		out.innerHTML += 
		`<p> <strong>${c.num} - ${c.name} </strong></p>`;
        console.log();
	}

    //declaring var for favorite category number
    let favCategoryNum = 1;
    $(".favCategory").append(`My favorite category of food is ${myCategories[favCategoryNum-1].name}`);

    //button to highlight favorite category
    $("#highlightFav").click(function() {
        $(`#itemList li[title ^= ${favCategoryNum}]`).toggleClass("liToggle");

    });

    //buttom to toggle list
    $("#toggleList").click(function() {
        console.log("toggle button clicked");
        $(`#itemList`).toggle();

    });
    //populating the h3 tag in footer
    $("footer h3:first").append(`Winter 2021 / SYST24444 / ${loginName} `);
    $("footer h3:first").addClass("headerStyle");
    
}); //end of doc ready
 