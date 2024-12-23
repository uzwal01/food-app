import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Blog1 from "../../assets/blog/blog-1.png"
import Blog2 from "../../assets/blog/blog-2.png"
import BlogList from '../../components/BlogList'

const mockData = [
    {
        id: "0001",
        image: Blog1,
        title: "The Burger Blog",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        URL: "https://theburgerblog.com",
    },
    {
        id: "0002",
        image: Blog2,
        title: "Burger Quest",
        paragraph: "I am on a quest to find the best burger in the world.",
        URL: "https://burgerquest.uk/blog/",
    },
    {
        id: "0003",
        image: Blog1,
        title: "The Burger Blog",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        URL: "https://theburgerblog.com",
    },
    {
        id: "0002",
        image: Blog2,
        title: "Burger Quest",
        paragraph: "I am on a quest to find the best burger in the world.",
        URL: "https://burgerquest.uk/blog/",
    },
]


const Section13 = () => {
  return (
    <>
      <section className='blog_page_section'>
            <div className='blog_screen'></div>
            <Container>
                <h2>BLOGS</h2>
            </Container>
      </section>
      <section className='blogs'>
        <Container>
            <Row>
                {
                    mockData.map((blogData, index)=>(
                        <BlogList 
                            key={index}
                            title={blogData.title}
                            paragraph={blogData.paragraph}
                            image={blogData.image}
                            URL={blogData.URL}
                        />
                    ))
                }
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Section13
