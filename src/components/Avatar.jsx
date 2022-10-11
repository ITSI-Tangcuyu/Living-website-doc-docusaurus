import React from 'react'
// import dynamic from 'next/dynamic'
import { LiAvatar } from '@itsi/living-base-react'

// const com = dynamic(() => import('@itsi/living-base-react'))

const Avatar = () => {
  return (
    <div className="mt-4">
      <LiAvatar size="l" shape="square">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.touxiangwu.com%2Fuploads%2Fallimg%2F2021090422%2Fnbqswd0h2fq.jpg&refer=http%3A%2F%2Fimg.touxiangwu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650692760&t=c5bb0da63cfbe4097a375ed83a35130d" />
      </LiAvatar>
    </div>
  )
}

export default Avatar
