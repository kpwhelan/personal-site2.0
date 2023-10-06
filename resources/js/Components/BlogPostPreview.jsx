import ReactMarkdown from 'react-markdown'
import PrimaryButton from './PrimaryButton'

export default function BlogPostPreview({ post }) {
    return (
        <article className="w-[70%] mt-16 border-b-2 pb-10">
            <img className='w-[90%] rounded-md object-cover object-center shadow-xl shadow-blue-gray-900/50' src={post.image_url}></img>
            <p className="text-5xl mt-8">{post.title}</p>
            <p className="italic ml-2 mt-2 text-md">Posted- <time>{new Date(post.created_at).toLocaleDateString()}</time></p>
            <ReactMarkdown className='line-clamp-6 text-xl mt-2'>{post.body}</ReactMarkdown>
            <a href={route('findPost', post.id)}>
                <PrimaryButton className='mt-4'>
                    <p className='text-lg'>Read More</p>
                </PrimaryButton>
            </a>
        </article>
    )
}
