import {useRouter} from 'next/router'

function ProductDetails () {
    const router = useRouter()
    const {productid} = router.query
    return <h1>Details about product {productid}</h1>
    // Dynamic Routing Example
    // id for query can be given number or some word eg.greekGod
}

export default ProductDetails;