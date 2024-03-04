import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <hr />
      <h2>기능 목록</h2>
      <nav>
        <ul>
            <li>
                <Link to="/insert">신규</Link>
            </li>
            <li>
                <Link to="/update">수정</Link>
            </li>
            <li>
                <Link to="/delete">삭제</Link>
            </li>
        </ul>
      </nav>
      <hr />
      <h2>기능 화면</h2>
      <Outlet />
    </div>
  );
};

export default Menu;