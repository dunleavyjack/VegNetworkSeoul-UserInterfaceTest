import React from "react";
import { signin, signout, useSession } from "next-auth/client";

const LoginModal = () => {
  const [session, loading] = useSession();
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content d-flex align-items-center text-center">
          <div className="modal-body">
            <h1 className="modal-header">JOIN THE NETWORK</h1>
            <div
              class="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

{
  /* <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Modal title dick
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div> */
}
