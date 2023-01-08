import React from 'react'
import BlogCard from './BlogCard'

function BlogList({blogList}) {
  return (
    <div className='flex flex-col justify-between font-manrope gap-4 items-stretch pb-8' style={{flexBasis:'33%'}}>
        {blogList?.length === 0  && <p>No blogs posted yet!</p>}
        {blogList && blogList?.map(blog => <BlogCard blog={blog}/>)}
    </div>
  )
}

export default BlogList