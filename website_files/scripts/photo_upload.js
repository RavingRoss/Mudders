function main()
{
    var inputFileToLoad = document.createElement("input");
    inputFileToLoad.type = "file";
    inputFileToLoad.id = "inputFileToLoad";
    document.body.appendChild(inputFileToLoad);
    inputFileToLoad.style.display = "block"
    inputFileToLoad.style.margin = "0 auto"

    var buttonLoadFile = document.createElement("button");
    buttonLoadFile.onclick = loadImageFileAsURL;
    buttonLoadFile.textContent = "Load Selected File";
    document.body.appendChild(buttonLoadFile);
    buttonLoadFile.style.display = "block"
    buttonLoadFile.style.margin = "0 auto"
}

function loadImageFileAsURL()
{
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.createElement("img");
                imageLoaded.src = fileLoadedEvent.target.result;
                document.body.appendChild(imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}

main();