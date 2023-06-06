import React, { useEffect } from 'react';
import './index.css'
import NewsSmall from '../../components/NewsSmall/NewsSmall.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/newsInformation'

export default function MainPage() {
	const dispatch = useDispatch()
    const posts = useSelector((state) => state.newsReducer.post)
    const isLoading = useSelector((state) => state.newsReducer.isLoading)

  useEffect((post) => {
    dispatch(fetchPosts())
  }, [])
	return (
		<>
		<div className='main'>
			<div className='main-header'>
				<p>AgriNews Daily</p>
				<h3>Trending....</h3>
			</div>
			<div className='main-news'>
				<div className='main-smallNews'>
					{isLoading 
                            ? <h1>is Loading...</h1>
                            : posts.map(post => <NewsSmall post={post}/>)
                       }
				</div>
				<div className='main-bigNews'>
					<img src="../../../public/strawberry.png" alt="" />
					<p>Strawberry Ginger</p>
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis cum consequat consequat duis urna egestas quis purus sit. Pellentesque vel condimentum enim eu. Cursus diam egestas maecenas vitae velit lectus. Pulvinar lorem nunc pharetra, mauris, scelerisque. Bibendum at congue mattis risus odio. Nibh orci vitae duis sed. Ipsum et risus aliquam a aliquam vestibulum justo ipsum in. Nulla.</h4>
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis cum consequat consequat duis urna egestas quis purus sit. Pellentesque vel condimentum enim eu. Cursus diam egestas maecenas vitae velit lectus. Pulvinar lorem nunc pharetra, mauris, scelerisque. Bibendum at congue mattis risus odio. Nibh orci vitae duis sed. Ipsum et risus aliquam a aliquam vestibulum justo ipsum in. Nulla.</h4>
				</div>
			</div>
		</div>
		</>
	)
}
