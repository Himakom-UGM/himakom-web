import React, {useState, useEffect} from 'react'
import { createClient } from 'contentful'

import DetailedPost from '../../components/detail-post/Example'

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.DEV
      ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN!
      : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN!,
})

export async function getStaticPaths() {
    const { items } = await client.getEntries({
      content_type: 'events',
    })
  
    const paths = items.map((item) => ({
      params:  {
        event: item.fields.title.toLowerCase().replace(/ /g, '-'),
      },
    }))
    console.log(paths);

  
    return {
      paths,
      fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
      content_type: 'events',
      'fields.title': params,
    })

    const matchingItem = items.find((item) => item.fields.title.toLowerCase().replace(/ /g, '-') === params.event.toLowerCase().replace(/ /g, '-'));
  
    return {
      props: {
        event: matchingItem || null,
        allevents : items,
      },
    }
  }

const event = ({event, allevents}) => {

  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    if (allevents) {
      setFilteredEvents(allevents);
    }
  }, [allevents]);
    console.log(event)
    // console.log(filteredEvents)
  return (
    <div>
        <DetailedPost 
        divisi={event.fields.divisi} 
        title={event.fields.title}
        date={event.sys.createdAt}
        img={event.fields.image[0].fields.file.url}
        published={event.sys.publishedBy}
        body= {event.fields.details}
        allevents={filteredEvents}
        
        />
    </div>
  )
}

export default event