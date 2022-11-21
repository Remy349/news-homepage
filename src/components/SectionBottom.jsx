import React from 'react'

export const SectionBottom = (props) => {
  return (
    <section className='main__bottom'>
      <article className='article__more'>
        <img
          className='article__more-img'
          src={props.imageRetroPcs}
          alt='Image retro pcs'
        />
        <div className='article__more-content'>
          <h2 className='article__more-content_number'>01</h2>
          <div>
            <h3 className='article__more-content_title'>Reviving Retro PCs</h3>
            <p className='article__more-content_info'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </article>
      <article className='article__more'>
        <img
          className='article__more-img'
          src={props.imageTopLaptops}
          alt='Image retro pcs'
        />
        <div className='article__more-content'>
          <h2 className='article__more-content_number'>02</h2>
          <div>
            <h3 className='article__more-content_title'>
              Top 10 Laptops of 2022
            </h3>
            <p className='article__more-content_info'>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
      </article>
      <article className='article__more'>
        <img
          className='article__more-img'
          src={props.imageGamingGrowth}
          alt='Image retro pcs'
        />
        <div className='article__more-content'>
          <h2 className='article__more-content_number'>03</h2>
          <div>
            <h3 className='article__more-content_title'>
              The Growth of Gaming
            </h3>
            <p className='article__more-content_info'>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
