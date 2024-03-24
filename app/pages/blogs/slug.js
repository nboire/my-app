import { useRouter } from "next/router";
const User = () => {
    const router = useRouter();
    const slug = router.query["slug"];
    return (
        <div>
            <h1>post {slug} </h1>
        </div>
    );
};
export default User;