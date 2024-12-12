import PostCard from "./PostCard";


export default function PostsList({ posts = [] }) {


    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {<PostCard post={post} />}
                </li>
            ))}
        </ul>
    )
}