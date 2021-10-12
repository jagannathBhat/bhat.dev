import React from 'react'
import Post from './Post'

const posts = [
  {
    date: '01 Aug 2021',
    image: 'https://miro.medium.com/max/1400/1*3gwUqtVMJ6JbV-EvERBFnA.jpeg',
    name: 'Interaction with Prime Minister Modi',
    url: 'https://jagannathbhat.medium.com/interaction-with-prime-minister-modi-2eccfd577685?source=bhat_dev',
  },
  {
    date: '24 Jul 2021',
    image: 'https://miro.medium.com/max/1400/1*gBlqqS2nXKNfDfWy4Yiq_g.png',
    name: 'Foodvid — Building a startup during the pandemic',
    url: 'https://jagannathbhat.medium.com/foodvid-building-a-startup-during-the-pandemic-3f96bbbafbd8?source=bhat_dev',
  },
  {
    date: '18 Jul 2021',
    image: 'https://miro.medium.com/max/1400/0*v_wMlIO2y97nBjoR',
    name: 'Registering your Partnership in Kerala — Deed, Lawyer, eGroops, Startup India, KSUM',
    url: 'https://jagannathbhat.medium.com/registering-your-partnership-in-kerala-deed-lawyer-egroops-startup-india-ksum-1d8e65f236e4?source=bhat_dev',
  },
  {
    date: '10 Jul 2021',
    image: 'https://miro.medium.com/max/1400/1*G4LKuWlnFvYvNapjAuu9Kw.jpeg',
    name: 'How to use a Journal to Improve Yourself and Achieve Your Goals',
    url: 'https://jagannathbhat.medium.com/journals-and-mental-health-3b4249efbf46?source=bhat_dev',
  },
  {
    date: '13 May 2020',
    image: 'https://miro.medium.com/max/1400/1*mbeGECfc4gIJSZhufTTvmg.jpeg',
    name: 'Learning Web Design in the Time of Coronavirus: How the Workshop went Online',
    url: 'https://medium.com/tinkerhub/learning-web-design-in-the-time-of-coronavirus-97056c975371?source=bhat_dev',
  },
  {
    date: '12 Sep 2019',
    image: 'https://miro.medium.com/max/1400/0*eCA0cNhJIepw3uqL',
    name: 'Getting Started is Half the Journey: FOSS Lessons from ASIET',
    url: 'https://medium.com/tinkerhub/getting-started-eee4a77c63dd?source=bhat_dev',
  },
]

const Blog = () => {
  return (
    <div className='bg-green-50 bg-opacity-40 py-20 text-center'>
      <h1 className='alt-font font-bold text-5xl'>blog</h1>
      <p className='mb-14 mt-2 mx-4 text-gray-500 text-lg sm:mx-auto sm:w-2/3'>
        these are some blog posts i've written and posted on{' '}
        <a
          className='underline'
          href='https://jagannathbhat.medium.com/'
          rel='noreferrer'
          target='_blank'
        >
          medium
        </a>
        . they're about different experiences i've had and what i've learned
        from them. hope you enjoy reading them. if you do, give them some claps.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-5/6'>
        {posts.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </div>
    </div>
  )
}

export default Blog
