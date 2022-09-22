import { Link } from "react-router-dom";

export default function BreadCrumb({ data }) {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${data.id}/study`}>{data.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </div>
  );
}
