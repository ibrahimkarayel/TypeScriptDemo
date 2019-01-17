let testBtn = document.getElementById("btnTest");

function playWithThis() {
    let cat = {
        id: "Cat 1",
        setAction: function () {
            testBtn.addEventListener("click", function () {
                console.log("1st Cat Event Listener");
                console.log(this.id);
            });
        }
    }
    cat.setAction();

    let otherCat = {
        id: "Cat 2",
        setAction: function () {
            testBtn.addEventListener("click", () => {
                console.log("2nd Cat Event Listener");
                console.log(this.id);
            });
        }
    }
    otherCat.setAction();
}

