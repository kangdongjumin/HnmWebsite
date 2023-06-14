import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'


const ProductAll = ({nowLogin}) => {
    const [productItem, setProductItem] = useState([])
    const [query, setQuery] = useSearchParams()
    const getProductData=async() => { 
    let searchQuery = query.get("q") || ""
    let url = `http://localhost:5000/products/?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductItem(data)
    console.log(nowLogin)
}
useEffect(()=> {
    getProductData()
}, [query])

  return (
    <Container>
        <Row>
            {productItem.map((item)=>(
                <Col lg={3}>
                <ProductCard item={item} nowLogin={nowLogin} />
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default ProductAll
