const BlogItem = ({blogItem, buttons}) => {
    return (
        <div className="card card-compact w-96 bg-white shadow-xl">
            <figure>
                <img
                    src={blogItem.image_url}
                    alt={''}
                className='h-52 w-full'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-start w-full overflow-hidden truncate">
                    {blogItem.title}
                </h2>
                <p className="w-full text-start overflow-hidden truncate">{blogItem.content}</p>
                <div className="card-actions justify-end">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default BlogItem
