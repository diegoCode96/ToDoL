import { useState } from "react"

const Cat = () => {

const [cat, setCat] = useState({
  name: 'kataboom',
  year: 5
})
  
const handleCLick = () => {
  // console.log('Click💥');
  //? ESTA ES UNA FORMA DE TRABAJAR
  // setCat({...cat, year: cat.year + 1})
  //? ESTA ES OTRA FORMA DE TRABAJAR
  setCat((prev) =>({...prev, year:cat.year + 1}))
}

  return (
    <>
    <h2>{cat.name} - {cat.year}</h2>
    <button onClick={handleCLick} className="btn btn-primary mb-2">Update year</button>
    </>
  )
}
export default Cat