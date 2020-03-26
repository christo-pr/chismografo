import { Link, routes } from '@redwoodjs/router'

const AuthLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <div className="bg-white font-sans">
        Pagina de auth
        <main className="mx-4 pb-4">{props.children}</main>
      </div>
    </div>
  )
}

export default AuthLayout
