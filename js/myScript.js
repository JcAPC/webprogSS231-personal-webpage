function myFunction2() {
    const element = document.getElementsByTagName("p");

    const firstParagraphText = element[0].innerHTML;

    document.getElementById("demo").innerHTML =
        "<br> The text in the first paragraph (index 0) is: <br>" + firstParagraphText;
}
