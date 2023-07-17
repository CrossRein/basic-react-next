import react from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import Teskutes from "../../pages/tesku";
const Kartu = ({foto,name,gelar,socials}) => {
  return (
    <div className="container">
      <div className="card">
      <div className="deletecard">
        <button className="hapusKartu">X</button>
      </div>
        <div className="imgcontainer">
          <img
            src={foto}
            alt="Person"
            className="card_image"
          ></img>
        </div>
        <div className="kasta">
          <div className="subkasta">Master</div>
        </div>

        <div className="grid_container">
          <div className="nama">{name}</div>
          <div className="jabatan">{gelar}</div>
        </div>
        <ul className="social-icons">
          <li className="social-icons-item">
            <a href={socials.facebook}>
              <BsFacebook />
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#">
              <BsTwitter />
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li className="social-icons-item">
            <a href={socials.linkedin}>
              <BsLinkedin />
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#">
              <BsWhatsapp />
            </a>
          </li>
        </ul>
        <div className="tombol">
          <button className="messageBtn">Message</button>
          <button className="connectBtn">Connect</button>
        </div>
      </div>
    </div>
  );
};
export default Kartu;
