import { useRouter } from 'next/router';

export default function Review () {
    const router = useRouter();
    const { productid, reviewid } = router.query;
    return (
        <h1>Review {reviewid} for product {productid}</h1>
    )
}