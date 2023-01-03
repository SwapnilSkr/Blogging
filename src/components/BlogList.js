import React from 'react'
import BlogCard from './BlogCard'

function BlogList({blogList}) {
  return (
    <div className='flex flex-row flex-wrap justify-between font-manrope gap-4 items-stretch pb-4' style={{flexBasis:'33%'}}>
        {blogList?.length === 0  && <p>No blogs posted yet!</p>}
        {blogList && blogList?.map(blog => <BlogCard blog={blog}/>)}
    </div>
  )
}

export default BlogList