function mainFunction(){

    function getData(){
        var input = document.getElementsByTagName("input");
        var data = [];

        for (var i = 0; i < input.length - 1; i++){
            data.push(input[i].value);
        }

        sessionStorage.setItem("data", JSON.stringify(data));
        setData();
    }

    function setData(){
        var topMiddleBio = document.getElementsByClassName("top-middle-bio");
        var topRightBio = document.getElementsByClassName("top-right-bio");        
        var data = JSON.parse(sessionStorage.getItem("data"));

        for (var i = 0; i < topMiddleBio.length; i++){
            topMiddleBio[i].innerHTML = data[i];
        }

        for (var j = 0; j < topRightBio.length; j++){
            topRightBio[j].innerHTML = data[j + 2];
        }
    }

    return {
        getData: getData
    }
}