// Function to update the paragraph to "A paragraph"
function myFunction() {
    document.getElementById("demo").innerHTML = "A paragraph.";
}

// Function to display the content of the first paragraph
function myFunction2() {
    const element = document.getElementsByTagName("p");
    const firstParagraphText = element[0].innerHTML;

    document.getElementById("demo").innerHTML =
        "The text in the first paragraph (index 0) is: <br>" + firstParagraphText;
}
