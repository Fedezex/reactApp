import React, {useState, useEffect} from 'react'
import ItemListContainer from '../components/ItemListContainer'

export default function Promises() {

  const[loading, setLoading] =useState(true)

  const [pago, setPago] = useState(0)
  
  const [error, setError] = useState('')

    let pagara = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(50)
        rej('no pago') 
    },5000)  
  })
  pagara
  .then((res)=>{
  setPago(res)
  setLoading(false)
})
  
  .catch((err)=>{
  setError(err)
  setLoading(false)
 })
  
 .finally(()=>{
  setLoading(false)
 })

  return <div>
      <p>{loading ? "Loading..." : null}</p>
      <p>{pago ? pago : null}</p>
      <p>{error ? error : null}</p>
      </div>
}
