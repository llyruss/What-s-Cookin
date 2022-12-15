let deleteBtns = document.getElementsByClassName('delete')
console.log(deleteBtns)

for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', async () => {
        let recipeId = deleteBtns[i].getAttribute('value')
        console.log("delete fetch")
        let response = await fetch(`/api/recipes/delete/${recipeId}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            document.location.replace('/recipes');
        } else {
            alert('Failed to delete recipe');
        }
    })

}
