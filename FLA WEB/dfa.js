function createNewElement() {
    var txtNewInputBox = document.createElement('div');
    txtNewInputBox.innerHTML = "<p>by text i meant this, but like sundar, and on first addition we'll add, uske baad se we'll just change the text everytime</p>";
    document.getElementById("newElementId").appendChild(txtNewInputBox);
}
function createNewElement2() {
    var txtNewInputBox2 = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox2'>";
    document.getElementById("newElementId2").appendChild(txtNewInputBox2);
}
function createNewElement3() {
    var txtNewInputBox3 = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox3'>";
    document.getElementById("newElementId3").appendChild(txtNewInputBox3);
}
