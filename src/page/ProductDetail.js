import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'


const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState()
    let {id} = useParams()
    const callDetailProduct=async()=> {
        let url = `https://my-json-server.typicode.com/kangdongjumin
        /HnmWebsite/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setProductDetail(data)
    }
useEffect(()=> {
 callDetailProduct()
},[])

  return (
    <Container className="product-detail-form">
      <Row>
      <Col>
      <img src={productDetail?.img}/>
        </Col>
      <Col>
        <div>{productDetail?.title}</div>
        <div>{productDetail?.price}</div>
        <div>
        <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
        <Dropdown.Item href="#/action-1">{productDetail?.size[0]}</Dropdown.Item>
      <Dropdown.Item href="#/action-2">{productDetail?.size[1]}</Dropdown.Item>
      <Dropdown.Item href="#/action-3">{productDetail?.size[2]}</Dropdown.Item>
    </DropdownButton>
        </div>
        <Button className="addButton" variant="dark">추가</Button>
      </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
