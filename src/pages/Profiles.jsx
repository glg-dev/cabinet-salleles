import React, { useEffect, useState } from 'react';
import Curriculum from '../components/Curriculum';
import floImg from '../assets/DSC_9390.jpg'

const Profiles = () => {
  const [floDatas, setFloDatas] = useState([])
  const [euceliaDatas, setEuceliaDatas] = useState([])
  const [noemieDatas, setNoemieDatas] = useState([])
  const [floExp, setFloExp] = useState(null)
  const [euceliaExp, setEuceliaExp] = useState(null)
  const [noemieExp, setNoemieExp] = useState(null)

  const fetchFlo = async () => {
    const response = await fetch('../datas/florianegirollet.json')
      .then((response) => response.json())
      setFloDatas(response)
      setFloExp(response.experiences)
  }

  const fetchEucelia = async () => {
    const response = await fetch('../datas/euceliagranet.json')
      .then((response) => response.json())
      setEuceliaDatas(response)
      setEuceliaExp(response.experiences)
  }

  const fetchNoemie = async () => {
    const response = await fetch('../datas/noemiefallet.json')
      .then((response) => response.json())
      setNoemieDatas(response)
      setNoemieExp(response.experiences)
  }

  useEffect(() => {
    fetchFlo()
    fetchEucelia()
    fetchNoemie()
  }, [])

  const { diplomes, formations, experiences, travaux } = floDatas


  return (
    <div className='profiles'>
        <div className="floriane article-card">
          <div className="presentation">
            <h2>Floriane Girollet</h2>
            <img src={floImg} alt="Floriane Girollet" />
          </div>
          {!floExp ? (
            <p>Chargement des données...</p>
          ) : (
              <div className="datas">
                <Curriculum title="Diplômes" items={diplomes} />
                <Curriculum title="Formations" items={formations} />
                <Curriculum title="Expériences" items={experiences} />
                <Curriculum title="Travaux" items={travaux} />
              </div>
          )}
        </div>

      <div className="eucelia article-card">
        <div className="presentation">
          <h2>Eucélia Granet</h2>
        </div>
        {!euceliaExp ? (
          <p>Chargement des données...</p>
        ) : (
          <div className="datas">
            <Curriculum title="Diplômes" items={euceliaDatas.diplomes} />
            <Curriculum title="Formations" items={euceliaDatas.formations} />
            <Curriculum title="Expériences" items={euceliaDatas.experiences} />
          </div>
        )}
      </div>

      <div className="noemie article-card">
        <div className="presentation">
          <h2>Noémie Fallet</h2>
        </div>
        {!noemieExp ? (
          <p>Chargement des données...</p>
        ) : (
          <div className="datas">
            <Curriculum title="Diplômes" items={noemieDatas.diplomes} />
            <Curriculum title="Formations" items={noemieDatas.formations} />
            <Curriculum title="Expériences" items={noemieDatas.experiences} />
          </div>
        )}
      </div>

    </div>
  );
};

export default Profiles;