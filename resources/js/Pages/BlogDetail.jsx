import {Link, usePage} from "@inertiajs/react";

const BlogDetail = () => {
    const {blog} = usePage().props;

    return (
        <>
            <header className="bg-blue-900 text-white p-4 navbar fixed">
                <div className="container mx-auto flex justify-between items-center">
                    <a href={'/'} className="text-2xl font-bold">Aquacare</a>
                </div>
            </header>
            <div className='h-24 bg-white'></div>
            <div className='bg-white text-black min-h-screen w-full flex flex-wrap px-96 py-3'>
                <div className='w-full mb-3'>
                    <img src={blog.image_url} alt="" className='w-full rounded-3xl'/>
                </div>
                <h1 className='text-5xl font-bold w-full mb-3'>{blog.title}</h1>
                <p className='text-justify'>{blog.content}</p>
                <Link href="/blogs" className="py-4 btn bg-teal-600 text-white hover:text-black">Kembali</Link>
            </div>
        </>
)
    ;
}

export default BlogDetail;
