//WILL BE DELETING THIS LATER, JUST USED TO TEST ENDPOINTS


const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    // .put(`/api/users/${id}`, setState )
    .then(res => {
      console.log('res:', res)
    //   updateColors([...colors, res.data])
    })
    .catch(err => {
			console.log('err:', err)
		})
    

  };

  const delete = (id) => {
    // will need to filter through the id's in order to delete
    // updateColors(colors.filter(item=> (item.id !== Number(id))))
  }

  const deleteColor = item => {
    console.log("color in DC:", item)
    axiosWithAuth()
    .delete(`/api/users/${id}`)
    .then( res => {
      console.log('Delete:', res)
      updatedState(res.data)
    })
    .catch(err => {
      console.log({'Delete:': err})
    })
  };
