import { useState } from "react";
import "./App.css";
import { plans } from "./constants";
import ExchangeModal from "./modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <img
            src="https://cdn.midasbuy.com/oversea_web/static/images/pc-logo.png"
            alt="midas"
            style={{ margin: "auto" }}
            width={150}
          />
          <img
            src="https://cdn.midasbuy.com/images/success-icon.a0039358.png"
            alt="midas"
            width={30}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {plans.map((plan) => {
          return (
            <div
              onClick={() => setIsOpenModal(true)}
              style={{
                maxWidth: "180px",
                width: "100%",
                height: "250px",
                background: "#171f45",
                borderRadius: "10px",
                margin: "auto",
              }}
            >
              <div
                style={{
                  margin: "auto",
                  width: "100%",
                  height: "65%",
                  backgroundImage: `url(https://cdn.midasbuy.com/oversea_web/static/media/card-img-bg.191385920e2e85e49db4.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <img src={plan.image} alt="" width={"100"} height={"70"} />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "35%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    padding: "0",
                    margin: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage:
                        "url(https://cdn.midasbuy.com/images/uc-small.bc30c95b.png)",
                    }}
                  ></div>
                  <p style={{ color: "#fff" }}>{plan.uc}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage:
                        "url(https://res.cloudinary.com/dxfqf6fgv/image/upload/v1711098455/5472350924736418910_109_ddmhhg.jpg)",
                      borderRadius: "15px",
                    }}
                  ></div>
                  <p style={{ color: "#fff" }}>{plan.coin}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ width: "100%", height: "200px", padding: "15px" }}>
          <p style={{ color: "white" }}>Follow us on</p>
          <div style={{ display: "flex", gap: "15px" }}>
            <img
              width={40}
              src="https://cdn.midasbuy.com/oversea_web/static/images/footer/footer-ins-new.png"
              alt=""
            />
            <img
              width={40}
              src="https://cdn.midasbuy.com/oversea_web/static/images/footer/footer-fb-new.png"
              alt=""
            />
            <img
              width={40}
              src="https://cdn.midasbuy.com/images/footer-tiktok-white.7743a9ae.png"
              alt=""
            />
            <img
              width={40}
              src="https://cdn.midasbuy.com/images/Discord.8277bca0.png"
              alt=""
            />
            <img
              width={40}
              src="https://cdn.midasbuy.com/images/twitter.80d9b5e6.png"
              alt=""
            />
            <img
              width={40}
              src="https://cdn.midasbuy.com/oversea_web/static/images/footer/footer-youtube-new.png"
              alt=""
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "silver",
              margin: "20px 0",
              opacity: "0.5",
            }}
          ></div>
          <div style={{ paddingBottom: "30px" }}>
            <p style={{ color: "white" }}>Contact us</p>
            <p style={{ color: "silver", fontSize: "10px" }}>
              If you need customer service, please contact us at
              Midasbuy_help@midasbuy.com or click "Feedback" to get in touch
              with us.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "silver",
              marginBottom: "10px",
              opacity: "0.5",
            }}
          ></div>
          <p style={{ color: "silver", fontSize: "10px", textAlign: "center" }}>
            Cookies Preference Terms of Service Privacy Policy
          </p>
          <p
            style={{
              color: "silver",
              fontSize: "10px",
              textAlign: "center",
              paddingBottom: "50px",
            }}
          >
            COPYRIGHT © High Morale Developments Limited. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
      <ExchangeModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
}

export default App;
