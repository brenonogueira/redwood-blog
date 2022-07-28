import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CommentsLayoutProps = {
  children: React.ReactNode
}

const CommentsesLayout = ({ children }: CommentsLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.commentses()}
            className="rw-link"
          >
            Commentses
          </Link>
        </h1>
        <Link
          to={routes.newComments()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Comments
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CommentsesLayout
