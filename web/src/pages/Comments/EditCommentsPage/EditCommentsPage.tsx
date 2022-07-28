import EditCommentsCell from 'src/components/Comments/EditCommentsCell'

type CommentsPageProps = {
  id: number
}

const EditCommentsPage = ({ id }: CommentsPageProps) => {
  return <EditCommentsCell id={id} />
}

export default EditCommentsPage
