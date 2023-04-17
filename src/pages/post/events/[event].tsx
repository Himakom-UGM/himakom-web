import React from 'react'
import { createClient } from 'contentful'

import DetailedPost from '../../../components/detail-post/Example'

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

    const matchingItem = items.find((item) => item.fields.title.toLowerCase() === params.event.toLowerCase());
  
    return {
      props: {
        event: matchingItem || null,
      },
    }
  }

const event = ({event}) => {
    console.log(event)
  return (
    <div>
        <DetailedPost 
        divisi={event.fields.divisi} 
        title={event.fields.title}
        date={event.sys.createdAt}
        
        />
    </div>
  )
}

export default event