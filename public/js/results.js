dqs("#closeModal").addEventListener("click",()=> {dqs("#authorModal").close()})
document.querySelectorAll(".authors").forEach(element => element.addEventListener("click", getAuthorInfo))
function dqs(selector){
    return document.querySelector(selector)
}
async function getAuthorInfo() {
    let authorId = this.getAttribute("authorId");
    let url = "api/authors/"+authorId;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dqs("#authorName").textContent = data[0][0].firstName + data[0][0].lastName;
    dqs("#authorImg").src = data[0][0].portrait;
    dqs("#authorModal").showModal();
}