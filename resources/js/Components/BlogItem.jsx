const BlogItem = ({blogItem, buttons}) => {
    return (
        <div className="card card-compact bg-white shadow-xl">
            <figure>
                <img
                    src={blogItem.image_url}
                    alt={''}
                    className='h-52 w-full'
                />
            </figure>
            <div className="card-body h-52">
                <a href={route('blogs.show', {slug: blogItem.slug})}
                   className="card-title text-start w-full text-gray-950">
                    {blogItem.title}
                </a>
                <p className="w-full text-start overflow-hidden truncate-lines">{blogItem.content}</p>
                <div className="card-actions justify-end">
                    {buttons}
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
