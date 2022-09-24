import { Link } from "react-router-dom";

function BreadCrumb({ data, route }) {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${data.id}`}>{data.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {route}
          </li>
        </ol>
      </nav>
    </div>
  );
}

function ShortBreadCrumb({ data, route }) {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {route}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export { BreadCrumb, ShortBreadCrumb };
