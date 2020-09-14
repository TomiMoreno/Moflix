import Link from "next/link";
import { useAppContext } from "./Context";
import Button from "./Button";
export default function Header() {
  const { usuario, setUsuario } = useAppContext();
  return (
    <>
      <header>
        <h3>Moflix</h3>

        {usuario.correo ? (
          <div className="menu">
            <input
              className="barraBusq"
              placeholder="Buscar..."
              type="search"
              name="busqueda"
            />
            <img
              className="userImg"
              src="https://lh3.googleusercontent.com/ogw/ADGmqu9qngaDjOg1wOjncVlMLEzgKcY7gRVHN1ojoV93=s32-c-mo"
            />
            <Button
              onClick={() => {
                setUsuario({});
              }}
            >
              Log out
            </Button>
          </div>
        ) : (
          <Link href="auth">
            <Button>
              <a>Login</a>
            </Button>
          </Link>
        )}
      </header>
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          display: flex;
          justify-content: space-between;
          background: rgba(19, 7, 44, 0.95);
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px;
        }
        .userImg {
          width: 40px;
          height: 40px;
          border: 1px solid #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 100px;
        }
        .logo {
          width: 52px;
          height: 50px;
          background: url(image.png);
        }
        .barraBusq {
          width: 353px;
          height: 39px;
          border: 2px solid #ffffff;
          box-sizing: border-box;
          border-radius: 45px;
          margin: 0 10px;
          display: flex;
          align-items: center;
          background: none;
          color: white;
          padding: 0 20px;
        }
        .menu {
          display: flex;
        }
      `}</style>
    </>
  );
}

/* header {
        position: sticky;
        background: #200d48;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
        font-weight: bold;
        height: 60px;
      }
      .menu {
        width: 500px;
        display: flex;
        justify-content: space-between;
      }
      a {
        cursor: pointer;
      }
      a:hover {
        color: gray;
      }
      .hamburger {
        display: none;
        height: 90%;
        border: 2px solid white;
        border-radius: 10px;
        padding: 3px;
      }
      img {
        height: 100%;
      }
      @media (max-width: 600px) {
        .menu {
          display: none;
          transition: display 2s;
        }
        .hamburger {
          display: block;
        }
        } */
