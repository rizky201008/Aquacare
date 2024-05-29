
const BlogItem = ({blogItem, buttons}) => {
    return (
        <div className="card card-compact w-96 bg-white shadow-xl">
            <figure>
                <img
                    src={blogItem.image_url}
                    alt={''}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {blogItem.title}
                </h2>
                <p className='w-full text-start'>{blogItem.content}</p>
                <div className="card-actions justify-end">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default BlogItem
