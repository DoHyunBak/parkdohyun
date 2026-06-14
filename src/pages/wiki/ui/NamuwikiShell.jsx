import React from "react";

export default function NamuwikiShell({
  mainContent,
  sidebarContent,
  logoContent,
}) {
  return (
    <div id="app">
      <div
        className="B5k1WAY7 _8dcBh0nr namu-shell-wrapper namu"
        data-v-25fe57d3=""
      >
        <div
          className="-tYxv8Ks RUkPIp9d"
          data-v-25fe57d3=""
          data-v-8c322ce6=""
        >
          <div
            className="tKZUxAMx xJzm9qPT xKwXnnrF"
            data-v-8c322ce6=""
            data-v-6d5c592c=""
          >
            <a
              href="/"
              className="_7g6jxNtv"
              title="도현위키"
              data-v-8c322ce6=""
            >
              {logoContent}
            </a>
            <div className="WSFK5FDc" data-v-8c322ce6="">
              <a href="/RecentChanges" className="rnbmLmNs" data-v-8c322ce6="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 240 240"
                  className="b2xjFe0L MlB9pI+l"
                  data-v-8c322ce6=""
                >
                  <path d="M210 131C209 131 207 132 206 133L196 143L217 164L227 154C229 152 229 148 227 146L214 133C213 132 212 131 210 131ZM191 149L130 209V230H151L212 169L191 149ZM110 219C59 214 20 171 20 120C20 65 65 20 120 20C173 20 216 61 220 113C217 112 214 111 210 111C202 111 196 115 192 119L165 146L125 122V70H110V130L154 157L110 201V219Z" />
                </svg>
                <span className="m52Dh6dE" data-v-8c322ce6="">
                  최근 변경
                </span>
              </a>
              <a href="/RecentDiscuss" className="rnbmLmNs" data-v-8c322ce6="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                  className="b2xjFe0L"
                  data-v-8c322ce6=""
                >
                  <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
                </svg>
                <span className="m52Dh6dE" data-v-8c322ce6="">
                  최근 토론
                </span>
              </a>
              <div
                className="_7ilXLk43 U-AbQ8b0"
                data-v-8c322ce6=""
                data-v-089e2dbc=""
              >
                <a href="#" className="rnbmLmNs" data-v-8c322ce6="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="b2xjFe0L"
                    data-v-8c322ce6=""
                  >
                    <path d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
                  </svg>
                  <span className="m52Dh6dE" data-v-8c322ce6="">
                    특수 기능
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                    className="dFIudcuj"
                    data-v-8c322ce6=""
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="WSFK5FDc JsU9KkSn" data-v-8c322ce6="">
              <div
                className="wWUNefnb iZiZhDwX"
                data-v-8c322ce6=""
                data-v-f9d94d45=""
              >
                <a
                  href="/random"
                  title="아무 문서로 이동"
                  className="eiqAFsca D6IWl3-T"
                  data-v-f9d94d45=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="VSkj9Kv6"
                    data-v-f9d94d45=""
                  >
                    <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
                  </svg>
                </a>
                <div className="QNR190Eo" data-v-f9d94d45="">
                  <form className="OvCBP6kZ" data-v-f9d94d45="">
                    <input
                      type="search"
                      placeholder="여기에서 검색"
                      autoComplete="off"
                      spellCheck="false"
                      tabIndex="1"
                      value=""
                      className="FkbRMf6C"
                      data-v-f9d94d45=""
                    />
                  </form>
                  <a
                    href="#"
                    title="검색"
                    className="eiqAFsca"
                    data-v-f9d94d45=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      className="VSkj9Kv6"
                      data-v-f9d94d45=""
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="이동"
                    className="eiqAFsca"
                    data-v-f9d94d45=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="VSkj9Kv6"
                      data-v-f9d94d45=""
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                  <div
                    className="GaD9Z4Js"
                    style={{ display: "none" }}
                    data-v-f9d94d45=""
                  ></div>
                </div>
              </div>

              <div
                className="_7ilXLk43 U-AbQ8b0"
                data-v-8c322ce6=""
                data-v-089e2dbc=""
              >
                <a href="#" className="rnbmLmNs" data-v-8c322ce6="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="b2xjFe0L MlB9pI+l"
                    data-v-8c322ce6=""
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tKZUxAMx xJzm9qPT mKP4FnCO"
          data-v-25fe57d3=""
          data-v-6d5c592c=""
        >
          <div className="_7BYuK3aZ" data-v-25fe57d3="">
            <div className="RhY9kVsm" data-v-25fe57d3="">
              {" "}
            </div>
            <div className="RhY9kVsm" data-v-25fe57d3="">
              {" "}
            </div>
            <div className="I4VBJBDp z8WUnDzz" data-v-25fe57d3="">
              <div className="RhY9kVsm" id="HoubKuNQb" data-v-25fe57d3=""></div>
              <div
                className="qO++nHs+ Ry1OXrjJ"
                huul9a1tj=""
                data-v-25fe57d3=""
                data-v-4e0b83f0=""
              >
                {mainContent}
              </div>
            </div>
            <div className="RhY9kVsm" data-v-25fe57d3="">
              {" "}
            </div>
            <div className="RhY9kVsm" data-v-25fe57d3="">
              {" "}
            </div>
            <div
              className="oJF-UTDl hbdFV4Oq"
              data-v-25fe57d3=""
              data-v-738d3e29=""
            >
              {sidebarContent}
            </div>
            <div className="RhY9kVsm" data-v-25fe57d3="">
              {" "}
            </div>
          </div>
        </div>
        <div
          className="vFh2G53B R1wCbZMe"
          data-v-25fe57d3=""
          data-v-93c91f08=""
        >
          <div
            className="tKZUxAMx xJzm9qPT"
            data-v-93c91f08=""
            data-v-6d5c592c=""
          >
            <div className="yUb1XDJA" data-v-93c91f08="">
              <div className="x5ds8SMo" data-v-93c91f08="">
                <a
                  href="https://play.google.com/store/apps/details?id=net.umanle.namuwiki"
                  className="KWlloIs3"
                  rel="noopener"
                  target="_blank"
                  title="나무위키 뷰어 - Play Store"
                  data-v-93c91f08=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjguOTkgMzEuOTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNMTMuNTQgMTUuMjguMTIgMjkuMzRhMy42NiAzLjY2IDAgMCAwIDUuMzMgMi4xNmwxNS4xLTguNloiIHN0eWxlPSJmaWxsOiNlYTQzMzUiLz48cGF0aCBkPSJtMjcuMTEgMTIuODktNi41My0zLjc0LTcuMzUgNi40NSA3LjM4IDcuMjggNi40OC0zLjdhMy41NCAzLjU0IDAgMCAwIDEuNS00Ljc5IDMuNjIgMy42MiAwIDAgMC0xLjUtMS41eiIgc3R5bGU9ImZpbGw6I2ZiYmMwNCIvPjxwYXRoIGQ9Ik0uMTIgMi42NmEzLjU3IDMuNTcgMCAwIDAtLjEyLjkydjI0Ljg0YTMuNTcgMy41NyAwIDAgMCAuMTIuOTJMMTQgMTUuNjRaIiBzdHlsZT0iZmlsbDojNDI4NWY0Ii8+PHBhdGggZD0ibTEzLjY0IDE2IDYuOTQtNi44NUw1LjUuNTFBMy43MyAzLjczIDAgMCAwIDMuNjMgMCAzLjY0IDMuNjQgMCAwIDAgLjEyIDIuNjVaIiBzdHlsZT0iZmlsbDojMzRhODUzIi8+PC9nPjwvZz48L3N2Zz4="
                    data-v-93c91f08=""
                  />
                </a>
                <a
                  href="https://apps.apple.com/app/id1623510780"
                  className="KWlloIs3"
                  rel="noopener"
                  target="_blank"
                  title="나무위키 뷰어 - App Store"
                  data-v-93c91f08=""
                >
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA4MDAgODAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4MDAgODAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MDAuMDUiIHkxPSI3OTguNzcxNyIgeDI9IjQwMC4wNSIgeTI9Ii0xLjIyODMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA3OTguNzcxNykiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMThCRkZCIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMDcyRjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggZmlsbD0idXJsKCNTVkdJRF8xXykiIGQ9Ik02MzguNCwwSDE2MS42QzcyLjMsMCwwLDcyLjMsMCwxNjEuNnY0NzYuOUMwLDcyNy43LDcyLjMsODAwLDE2MS42LDgwMGg0NzYuOSAgYzg5LjIsMCwxNjEuNi03Mi4zLDE2MS42LTE2MS42VjE2MS42QzgwMCw3Mi4zLDcyNy43LDAsNjM4LjQsMHoiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM5Ni42LDE4My44bDE2LjItMjhjMTAtMTcuNSwzMi4zLTIzLjQsNDkuOC0xMy40czIzLjQsMzIuMywxMy40LDQ5LjhMMzE5LjksNDYyLjRoMTEyLjkgIGMzNi42LDAsNTcuMSw0Myw0MS4yLDcyLjhIMTQzYy0yMC4yLDAtMzYuNC0xNi4yLTM2LjQtMzYuNGMwLTIwLjIsMTYuMi0zNi40LDM2LjQtMzYuNGg5Mi44bDExOC44LTIwNS45bC0zNy4xLTY0LjQgIGMtMTAtMTcuNS00LjEtMzkuNiwxMy40LTQ5LjhjMTcuNS0xMCwzOS42LTQuMSw0OS44LDEzLjRMMzk2LjYsMTgzLjhMMzk2LjYsMTgzLjh6IE0yNTYuMiw1NzIuN2wtMzUsNjAuNyAgYy0xMCwxNy41LTMyLjMsMjMuNC00OS44LDEzLjRTMTQ4LDYxNC41LDE1OCw1OTdsMjYtNDVDMjEzLjQsNTQyLjksMjM3LjMsNTQ5LjksMjU2LjIsNTcyLjdMMjU2LjIsNTcyLjd6IE01NTcuNiw0NjIuNmg5NC43ICBjMjAuMiwwLDM2LjQsMTYuMiwzNi40LDM2LjRjMCwyMC4yLTE2LjIsMzYuNC0zNi40LDM2LjRoLTUyLjZsMzUuNSw2MS42YzEwLDE3LjUsNC4xLDM5LjYtMTMuNCw0OS44Yy0xNy41LDEwLTM5LjYsNC4xLTQ5LjgtMTMuNCAgYy01OS44LTEwMy43LTEwNC43LTE4MS4zLTEzNC41LTIzM2MtMzAuNS01Mi42LTguNy0xMDUuNCwxMi44LTEyMy4zQzQ3NC4yLDMxOC4xLDUwOS45LDM4MCw1NTcuNiw0NjIuNkw1NTcuNiw0NjIuNnoiLz4KPC9zdmc+"
                    data-v-93c91f08=""
                  />
                </a>
              </div>
              <div data-v-93c91f08="">
                <div
                  className="uJzHsei3"
                  style={{ marginTop: "0" }}
                  data-v-93c91f08=""
                >
                  <ul className="bYpnTaJ6" data-v-93c91f08="">
                    <li data-v-93c91f08="">namu.wiki</li>
                    <li data-v-93c91f08="">
                      <a href="mailto:support@namu.wiki" data-v-93c91f08="">
                        Contáctenos
                      </a>
                    </li>
                    <li data-v-93c91f08="">
                      <a href="/Policy" data-v-93c91f08="">
                        Términos de uso
                      </a>
                    </li>
                  </ul>
                  <ul className="bYpnTaJ6" data-v-93c91f08="">
                    <li data-v-93c91f08="">Operado por umanle S.R.L.</li>
                    <li data-v-93c91f08="">
                      Hecho con ❤️ en Asunción, República del Paraguay
                    </li>
                  </ul>
                </div>
                <ul className="bYpnTaJ6" data-v-93c91f08="">
                  <li data-v-93c91f08="">
                    {" "}
                    Su zona horaria es{" "}
                    <span className="jZlFpxrP" data-v-93c91f08="">
                      GMT
                    </span>
                  </li>
                  <li data-v-93c91f08="">Impulsado por the seed engine</li>
                </ul>
              </div>
            </div>
            <div className="REStGat3" data-v-93c91f08="">
              <p data-v-93c91f08="">
                {" "}
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  rel="nofollow noopener"
                  target="_blank"
                  data-v-93c91f08=""
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  rel="nofollow noopener"
                  target="_blank"
                  data-v-93c91f08=""
                >
                  Terms of Service
                </a>{" "}
                apply. This site is protected by hCaptcha and its{" "}
                <a
                  href="https://www.hcaptcha.com/privacy"
                  rel="nofollow noopener"
                  target="_blank"
                  data-v-93c91f08=""
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://www.hcaptcha.com/terms"
                  rel="nofollow noopener"
                  target="_blank"
                  data-v-93c91f08=""
                >
                  Terms of Service
                </a>{" "}
                apply.{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className="lqzkwBXs bARwyFjV FByh8f2X"
          data-v-25fe57d3=""
          data-v-92b9f70b=""
        >
          <ul className="JDX+wPFA" data-v-92b9f70b="">
            <li className="a+53z639" data-v-92b9f70b="">
              <a
                href="#"
                className="KYl2o6Qa nvNNYXwt"
                data-tooltip="맨 위로"
                data-v-92b9f70b=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                  data-v-92b9f70b=""
                >
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
              </a>
            </li>
            <li className="a+53z639" data-v-92b9f70b="">
              <a
                href="#"
                className="KYl2o6Qa nvNNYXwt"
                data-tooltip="맨 아래로"
                data-v-92b9f70b=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                  data-v-92b9f70b=""
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="modals-container"></div>
    </div>
  );
}
