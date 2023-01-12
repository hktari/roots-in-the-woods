import React from 'react'

type InfoSectionProps = {}

import childFriendlyImage from '../../images/child-friendly.jpg';
import dogFriendlyImage from '../../images/dog-friendly.jpg';
import InfoItem from '../info-item';
const InfoSection = (props: InfoSectionProps) => {

  const data = {
    info: [
      {
        title: 'Child Friendly',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta officia ab cum fuga voluptas.',
        image: childFriendlyImage
      },
      {
        title: 'Dog Friendly',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quibusdam, repudiandae, voluptatem deleniti id facilis eligendi provident error nemo ducimus accusamus commodi.',
        image: dogFriendlyImage
      },
      {
        title: 'Camping',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, magni quas, quis fugiat repellat voluptatibus at velit aspernatur incidunt soluta eveniet quo illum unde aperiam magnam atque.',
        image: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
    ]
  }

  return (
    <section className='c-section'>
      <h2 className="c-section__title">
      </h2>

      <div className="c-floating-layout">
        {data.info.map(info => (
          <div className="c-floating-layout__item">
            <InfoItem info={info} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default InfoSection