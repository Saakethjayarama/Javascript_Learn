import { useRouter } from "next/router";

function productById() {
    const router = useRouter();
    const {id, prodid} = router.query;

    return <h1>Blog Number {id} product id {prodid}</h1>
}

export default productById;