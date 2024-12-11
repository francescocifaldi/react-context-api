import { useContext } from "react";
import PostsList from "./PostsList";
import PostsContext from "../contexts/PostsContext";

export default function PostsPage() {
    const { posts } = useContext(PostsContext)
    return (
        <main>
            <section>
                <div className="container">
                    <h2>Posts List</h2>
                </div>
                <div className="container">
                    <PostsList posts={posts} />
                </div>
            </section>
        </main>
    )
}