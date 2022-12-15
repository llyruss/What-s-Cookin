let deleteBtn = document.getElementById('delete')

deleteBtn.addEventListener('click', () => {
    let recipeId = deleteBtn.getAttribute('value')
    let response = await fetch(`/api/recipe/delete/${recipeId}`, {
        method: 'DELETE',
      })
  
      if (response.ok) {
        document.location.replace('/recipe');
      } else {
        alert('Failed to delete recipe');
      }
} )