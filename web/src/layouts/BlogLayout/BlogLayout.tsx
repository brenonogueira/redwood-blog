// import { Link, routes } from '@redwoodjs/router'

import { Container } from 'reactstrap'

import BlogNavbar from '../../components/BlogNavbar/BlogNavbar'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <BlogNavbar />
      <Container className="bg-light border" fluid>
        {children}
      </Container>
    </>
  )
}

export default BlogLayout
