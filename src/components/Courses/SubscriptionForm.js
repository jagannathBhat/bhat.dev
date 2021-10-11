import React from 'react'

const SubscriptionForm = () => {
  return (
    <div id='mc_embed_signup'>
      <form
        action='https://dev.us5.list-manage.com/subscribe/post?u=adf541b7f0c541a8e87371ed3&amp;id=de490fd8e5'
        className='validate'
        id='mc-embedded-subscribe-form'
        method='post'
        name='mc-embedded-subscribe-form'
        noValidate
        target='_blank'
      >
        <div
          className='flex items-center justify-start'
          id='mc_embed_signup_scroll'
        >
          <div className='mc-field-group flex mr-2'>
            <input
              className='required email border-2 p-2 w-full'
              id='mce-EMAIL'
              name='EMAIL'
              placeholder='email address'
              type='email'
            />
          </div>
          <div className='clear' id='mce-responses'>
            <div className='response hidden' id='mce-error-response'></div>
            <div className='response hidden' id='mce-success-response'></div>
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden='true'
          >
            <input
              type='text'
              name='b_adf541b7f0c541a8e87371ed3_de490fd8e5'
              tabIndex='-1'
              defaultValue=''
            />
          </div>
          <div className='clear flex-1'>
            <input
              className='button bg-transparent border-2 border-green-500 p-2 text-green-500'
              id='mc-embedded-subscribe'
              name='subscribe'
              type='submit'
              value='subscribe'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SubscriptionForm
