export const checkoutHandler = async () => {
    const data = [
        {
            id: "summer-2025",
            cantidad: 1,
            precio: 960,
            curso: "Summer. Plan Vacacional"
        }
    ]
    
    const resp = await fetch("https://fyrlois.com/api/checkoutPromo", {
    method: "POST",
    body: JSON.stringify({data, promCode:true}),
    headers: {
      "Content-Type": "application/json",
    },
  })
  console.log(resp);
  

  if (resp) {
    const response = await resp.json()

    window.location.href = response.data.url
  } else {
    console.log("Error al enviar los datos")
  }
    
}