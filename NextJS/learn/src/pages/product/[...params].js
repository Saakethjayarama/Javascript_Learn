import { useRouter } from "next/router"

function product() {
    const router = useRouter()
    console.log(router.query.params)
    return <h1>Product index page.</h1>
    /**
     * * Wrap [] with [] for optional catch all routing.
     */
}

export default product