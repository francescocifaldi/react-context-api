import PostsList from "./PostsList";

export default function PostsPage() {
    return (
        <main>
            <section>
                <div className="container">
                    <h2>Posts List</h2>
                </div>
                <div className="container">
                    <PostsList />
                </div>
            </section>
        </main>
    )
}