function PostPreview({post}){
    return(
        <article className="post-preview">
            <h2>{post.attributes.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
            <p>{post.attributes.excerpt || 'Leer más...'}</p>
        </article>
    )
}

export default PostPreview;