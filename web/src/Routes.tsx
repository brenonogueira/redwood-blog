// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AuthorsLayout from 'src/layouts/AuthorsLayout'

import BooksLayout from 'src/layouts/BooksLayout'

import RolesLayout from 'src/layouts/RolesLayout'

import UsersLayout from 'src/layouts/UsersLayout'

import CommentsesLayout from 'src/layouts/CommentsesLayout'

import PostsLayout from 'src/layouts/PostsLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import ContactPage from './pages/ContactPage/ContactPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AuthorsLayout}>
        <Route path="/authors/new" page={AuthorNewAuthorPage} name="newAuthor" />
        <Route path="/authors/{id:Int}/edit" page={AuthorEditAuthorPage} name="editAuthor" />
        <Route path="/authors/{id:Int}" page={AuthorAuthorPage} name="author" />
        <Route path="/authors" page={AuthorAuthorsPage} name="authors" />
      </Set>
      <Set wrap={BooksLayout}>
        <Route path="/books/new" page={BookNewBookPage} name="newBook" />
        <Route path="/books/{id:Int}/edit" page={BookEditBookPage} name="editBook" />
        <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
        <Route path="/books" page={BookBooksPage} name="books" />
      </Set>
      <Set wrap={RolesLayout}>
        <Route path="/roles/new" page={RoleNewRolePage} name="newRole" />
        <Route path="/roles/{id:Int}/edit" page={RoleEditRolePage} name="editRole" />
        <Route path="/roles/{id:Int}" page={RoleRolePage} name="role" />
        <Route path="/roles" page={RoleRolesPage} name="roles" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={CommentsesLayout}>
        <Route path="/commentses/new" page={CommentsNewCommentsPage} name="newComments" />
        <Route path="/commentses/{id:Int}/edit" page={CommentsEditCommentsPage} name="editComments" />
        <Route path="/commentses/{id:Int}" page={CommentsCommentsPage} name="comments" />
        <Route path="/commentses" page={CommentsCommentsesPage} name="commentses" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
