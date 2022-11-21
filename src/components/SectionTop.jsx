import React from 'react'

export const SectionTop = (props) => {
  return (
    <section className='main__top'>
      <article className='article__left'>
        <picture>
          <source media='(min-width: 768px)' srcSet={props.imageDesktop} />
          <img
            src={props.imageMobile}
            className='article__left-img'
            alt='Image mobile'
          />
        </picture>
        <div className='article__left-content'>
          <div>
            <h1 className='article__left-content_title'>
              The Bright Future of Web 3.0?
            </h1>
          </div>
          <div>
            <p className='article__left-content_info'>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className='article__left-content_readmore'>
              <a href='#' className='article__left-content_readmore_btn'>
                Read more
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='article__right'>
        <h2 className='article__right-title'>New</h2>
        <div className='article__right-content'>
          <h3 className='article__right-content_subtitle'>
            Hydrogen VS Electric Cars
          </h3>
          <p className='article__right-content_info'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <hr />
        <div className='article__right-content'>
          <h3 className='article__right-content_subtitle'>
            The Downsides of AI Artistry
          </h3>
          <p className='article__right-content_info'>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr />
        <div className='article__right-content'>
          <h3 className='article__right-content_subtitle'>
            Is VC Funding Drying Up?
          </h3>
          <p className='article__right-content_info'>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </article>
    </section>
  )
}
