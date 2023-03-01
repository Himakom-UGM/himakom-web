import  blogpoststyle from '../../styles/Blogpost.module.scss'
import Image from 'next/image'
import { useState } from 'react';

export default function Example() {
   
  const [search, setSearch] = useState(true);

  const searchActive = blogpoststyle.contentwrapper_rightcol_search_iconactive;

  const searchInActive = blogpoststyle.contentwrapper_rightcol_search_iconinactive;


  return <>
    <div className={blogpoststyle.bannerwrapper}>

      <div className={blogpoststyle.bannerwrapper_button}>
        <a href="">
          Divisi
        </a>
      </div>
      <div className={blogpoststyle.bannerwrapper_title}>
        <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
      </div>
      
      <div className={blogpoststyle.bannerwrapper_postdate}>
        <h2>
        Posted on 02/05/20 by Ramzy Izza
        </h2>
      </div>


    </div>

    <div className={blogpoststyle.contentwrapper}>
      <div className={blogpoststyle.contentwrapper_leftcol}>
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <div className={blogpoststyle.contentwrapper_leftcol_imagewrapper}>
          <Image 
          src='/images/blogpostimage2.png'
          alt='image2'
          height='497'
          width='882'
          />
          <p>Description if Available</p>
        </div>
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <div className={blogpoststyle.contentwrapper_leftcol_notes}>
          <p>Put any text or notes below here</p>
        </div>
      </div>

      <div className={blogpoststyle.contentwrapper_rightcol}>
        <div className={blogpoststyle.contentwrapper_rightcol_search}>
          <Image src='search_icon.svg' alt='search icon' width='30' height='30'/>
          <input type="text" placeholder='Find Other Article' onMouseEnter={()=>setSearch(false)} onMouseLeave={()=>setSearch(false)}/>
        </div>
      </div>
    </div>

  </>
}


