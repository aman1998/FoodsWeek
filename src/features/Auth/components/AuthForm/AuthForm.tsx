import { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import Modal from "shared/components/Modal";

import SignIn from "../SignIn";
import SignUp from "../SignUp";
import AuthFormText from "../AuthFormText";
import ResetEmailPassword from "../ResetEmailPassword";
import { authModalIsOpenSelector, authTypeSelector } from "../../store/selectors";
import { changeAuthModalIsOpen } from "../../store/reducers";
import { EAuthTypes } from "../../types";
import { getTitle } from "../../utils";

const AuthForm: FC = () => {
  const isOpenModal = useSelector(authModalIsOpenSelector);
  const authType = useSelector(authTypeSelector);

  const signInRef = useRef<HTMLInputElement>(null);
  const signUpRef = useRef<HTMLInputElement>(null);
  const nodeRef = authType === EAuthTypes.signin ? signInRef : signUpRef;

  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpenModal} onClose={() => dispatch(changeAuthModalIsOpen(false))}>
      <SwitchTransition>
        <CSSTransition
          key={authType}
          nodeRef={nodeRef}
          addEndListener={done => {
            if (nodeRef.current) nodeRef.current.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <div className="auth-form" ref={nodeRef}>
            <h1 className="auth-form__title">{getTitle(authType)}</h1>
            {authType === EAuthTypes.signin ? (
              <SignIn />
            ) : authType === EAuthTypes.signup ? (
              <SignUp />
            ) : (
              <ResetEmailPassword />
            )}
            <AuthFormText type={authType} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </Modal>
  );
};
export default AuthForm;
