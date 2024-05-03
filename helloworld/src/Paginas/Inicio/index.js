import Banner from "../../Components/Banner/index.js";
import styles from "./Inicio.module.css";
import posts from "../../json/posts.json";
import Post from "Components/Post/index.js";

export default function Inicio() {
    return (

        <main>
            <Banner />
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}