import react, { useState } from "react";
import Kartu from "../components/tesku/kartu";
const Teskutes = function () {
  const [id, setId] = useState("");
  const [foto, setFoto] = useState("");
  const [name, setName] = useState("");
  const [gelar, setGelar] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [hapusKartu, setHapusKartu] = useState("");
  const [dataKartu, setDataKartu] = useState([
    {
      id: 1,
      foto: "https://scontent.fsrg6-1.fna.fbcdn.net/v/t31.18172-8/16836552_1347141622012936_3735671229009202064_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=tzIB3GBTQvkAX8gcrj2&tn=BxLnhqBz-_VIpxKX&_nc_ht=scontent.fsrg6-1.fna&oh=00_AfBMA6kaBbBRjwXbROXFwJ6nfiroSsRFZyEUzvK-MeH9nA&oe=64148CDD",
      name: "Raindy",
      gelar: "Bos Besar",
      socials: {
        facebook: "https://www.facebook.com/raindy.hardiansyah",
        linkedin: "https://www.facebook.com/",
      },
    },
    {
      id: 2,
      foto: "https://scontent.fsrg6-1.fna.fbcdn.net/v/t31.18172-1/27164532_1672769322783496_6986058425621278725_o.jpg?stp=c0.62.160.160a_dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hFvDBfrZvi4AX-0QEuU&_nc_ht=scontent.fsrg6-1.fna&oh=00_AfAflVjMtwQlrAHvm5SCc9CS2DelOHDvybJ78RMaG7v_vA&oe=640D67A2",
      name: "Tanu",
      gelar: "Bawahan",
      socials: {
        facebook: "https://www.facebook.com/Tanu.Prahatama.Hafiyyan.Romi/",
        linkedin: "",
      },
    },
    {
      id: 3,
      foto: "https://scontent.fsrg6-1.fna.fbcdn.net/v/t1.18169-9/14606462_884537315014955_1561287581216767184_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=_r9E0k7Yi2EAX81PqW9&tn=BxLnhqBz-_VIpxKX&_nc_ht=scontent.fsrg6-1.fna&oh=00_AfDNkjnJgmjJwxNAos5uHxWSvzYRUNqoB-frIMEME7HipQ&oe=640D7A21",
      name: "Fahmi",
      gelar: "Bos Besar 2",
      socials: {
        facebook: "https://www.facebook.com/fahmi.zakaria.52",
        linkedin: "",
      },
    },
    {
      id: 4,
      foto: "https://scontent.fsrg6-1.fna.fbcdn.net/v/t31.18172-8/26952095_1672768246116937_3380610225655217384_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=DJ__lwdr6VQAX8QhA88&_nc_ht=scontent.fsrg6-1.fna&oh=00_AfBFbqcTOuBRLGjURaeNmcgQ6x1-FSPvFBiz5CokxrkWkA&oe=640D652D",
      name: "Hari",
      gelar: "Juragan Besar",
      socials: { facebook: "", linkedin: "" },
    },
  ]);
  const submitData = () => {
    const dataku = {
      id: dataKartu.length + 1,
      foto: foto,
      name: name,
      gelar: gelar,
      socials: { facebook: facebook, linkedin: linkedin },
    };
    //const newData = dataKartu.push(dataku);
    const newData = dataKartu.concat([dataku]);
    console.log(newData);
    setDataKartu(newData);
  };
  return (
    <div className={"parent_container"}>
      <div className="formkartu">
        <input
          type="text"
          placeholder="enter foto"
          value={foto}
          onChange={(event) => setFoto(event.target.value)}
        />
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="enter gelar"
          value={gelar}
          onChange={(event) => setGelar(event.target.value)}
        />
        <input
          type="text"
          placeholder="enter FB"
          value={facebook}
          onChange={(event) => setFacebook(event.target.value)}
        />
        <input
          type="text"
          placeholder="enter linkedin"
          value={linkedin}
          onChange={(event) => setLinkedin(event.target.value)}
        />
        <button onClick={submitData}>Send</button>
      </div>
      Card profiles
      <div className="kartucontainer">
        {dataKartu
          .sort(function (a, b) {
            return a.id - b.id;
          })
          .map((value) => (
            <Kartu
              key={value.id}
              foto={value.foto}
              name={value.name}
              gelar={value.gelar}
              socials={value.socials}
              hapusKartu={value.hapusKartu}
            />
          ))}
      </div>
    </div>
  );
};

export default Teskutes;
