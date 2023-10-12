import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                {/* <use xlink:to="#bootstrap"></use> */}
              </svg>
            </a>
            <span className="text-muted">© 2023 GoFoods, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" to="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:to="#twitter"></use> */}
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" to="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:to="#instagram"></use> */}
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" to="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:to="#facebook"></use> */}
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
