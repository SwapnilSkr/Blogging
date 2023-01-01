import React from 'react'
import BlogCard from './BlogCard'

function BlogList({blogList}) {
  return (
    <div className='flex flex-row flex-wrap justify-between gap-8 items-stretch pb-4' style={{flexBasis:'33%'}}>
        {blogList && blogList?.map(blog => <BlogCard blog={blog}/>)}
    </div>
  )
}

export default BlogList