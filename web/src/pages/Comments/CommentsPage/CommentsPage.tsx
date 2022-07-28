import CommentsCell from 'src/components/Comments/CommentsCell'

type CommentsPageProps = {
  id: number
}

const CommentsPage = ({ id }: CommentsPageProps) => {
  return <CommentsCell id={id} />
}

export default CommentsPage
