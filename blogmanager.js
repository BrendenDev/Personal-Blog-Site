$.getJSON("/blogs/blog18-02-2023.json.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
window.onload = function() {
    var posts = document.querySelector(".posts").querySelectorAll("a");
    for(let i = 0; i < posts.length; i++) {
        posts[i].innerHTML = "Post" + (i+1); //change this to title of document
    }
}
