import { createAction, handleActions } from "redux-actions";
import produce from "immer";

export const dummyUser = {
  userId: "gldjfh7",
  userName: "차정원",
  phoneNum: "111-111-1111",
  userPw: "123",
  userAvatar: "",
  point: "",
  rentNum: 53
};

export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: "", // 로그인 실패 사유
  isLoggingOut: false, // 로그아웃 시도중
  logoutErrorReason: "", // 로그아웃 실패 사유
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: "", // 회원가입 실패 사유
  isEditedProfile: false, // 회원정보수정 성공
  isEditingProfile: false, // 회원정보수정 시도중
  editProfileErrorReason: "", // 회원정보 실패 사유
  isDeletedUser: false, // 회원탈퇴성공
  deleteUserErrorReason: "", // 회원탈퇴 실패 사유
  userData: null, // 내정보
  editAvatar: null // 수정할 아바타 정보
};

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST"; // 회원가입
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST"; // 로그인
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST"; // 회원정보 불러오기
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST"; // 회원정보 수정
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST"; // 회원탈퇴
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"; // 로그아웃
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

// 동기 액션
export const UPLOAD_USER_AVATAR = "UPLOAD_USER_AVATAR"; // 아바타 업로드

// 액션핸들러
export const signup = createAction(
  SIGN_UP_REQUEST,

  ({ avatar, id, name, phone, password }) => ({
    avatar,
    id,
    name,
    phone,
    password
  })
);
export const login = createAction(LOG_IN_REQUEST, (id, password) => ({
  id,
  password
}));
export const loadUser = createAction(LOAD_USER_REQUEST, userId => ({
  userId
}));
export const editUser = createAction(
  EDIT_USER_REQUEST,
  (avatar, phone, prevPassword, nextPassword) => ({
    avatar,
    phone,
    prevPassword,
    nextPassword
  })
);
export const deleteUser = createAction(DELETE_USER_REQUEST, userId => ({
  userId
})); // 미정
export const logout = createAction(LOG_OUT_REQUEST);
export const uploadUserAvatar = createAction(UPLOAD_USER_AVATAR, avatarUrl => ({
  avatarUrl
}));

// 여기추가

export default handleActions(
  {
    [SIGN_UP_REQUEST]: (state, action) =>
      produce(state, draft => {
        draft.isSigningUp = true;
        draft.isSignedUp = false;
        draft.signUpErrorReason = "";
      }),
    [SIGN_UP_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.isSigningUp = false;
        draft.isSignedUp = true;
      }),
    [SIGN_UP_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.isSigningUp = false;
        draft.signUpErrorReason = action.error;
      }),

    [LOG_IN_REQUEST]: (state, action) =>
      produce(state, draft => {
        draft.logInErrorReason = "";
        draft.isLoggingIn = true;
      }),
    [LOG_IN_SUCCESS]: (state, action) =>
      produce(state, draft => {
        console.log("session Insert");
        draft.isLoggingIn = false;
        draft.userData = dummyUser;
      }),
    [LOG_IN_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.isLoggingIn = false;
        draft.logInErrorReason = action.error;
        draft.userData = null;
      }),

    [LOG_OUT_REQUEST]: (state, action) =>
      produce(state, draft => {
        draft.isLoggingOut = true;
        draft.logoutErrorReason = "";
      }),
    [LOG_OUT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        console.log("session Delete");
        draft.isLoggingOut = false;
        draft.userData = null;
      }),
    [LOG_OUT_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.isLoggingOut = false;
        draft.logInErrorReason = action.error;
      }),

    // [LOAD_USER_REQUEST] : (state, action)=>
    [LOAD_USER_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.userData = dummyUser;
        draft.logInErrorReason = "";
      }),
    [LOAD_USER_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.logInErrorReason = action.error;
      }),
    [EDIT_USER_REQUEST]: (state, action) =>
      produce(state, draft => {
        draft.isEditingProfile = true;
        draft.isEditedProfile = false;
      }),
    [EDIT_USER_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.isEditingProfile = false;
        draft.isEditedProfile = true;
      }),

    [EDIT_USER_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.isEditingProfile = false;
        draft.isEditedProfile = false;
        draft.editProfileErrorReason = action.error;
      }),

    [DELETE_USER_REQUEST]: (state, action) =>
      produce(state, draft => {
        draft.isDeletingUser = true;
        draft.deleteUserErrorReason = "";
        draft.isDeletedUser = false;
      }),

    [DELETE_USER_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.isDeletingUser = true;
        draft.isDeletedUser = true;
        draft.isLoggedIn = false;
        draft.userData = null;
      }),

    [DELETE_USER_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.isDeletingUser = false;
        draft.deleteUserErrorReason = action.error;
      }),
    [UPLOAD_USER_AVATAR]: (state, action) =>
      produce(state, draft => {
        draft.editAvatar = action.payload.avatarUrl;
      })
  },
  initialState
);
