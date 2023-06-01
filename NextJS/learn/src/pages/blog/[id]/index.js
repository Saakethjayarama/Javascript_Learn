import { useRouter } from "next/router";

function productById() {
    const router = useRouter();
    const id = router.query.id;

    return <h1>Blog Number {id}</h1>
}

export default productById;