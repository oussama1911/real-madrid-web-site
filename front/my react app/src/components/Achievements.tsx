import '../styling/achievements.css';




const Achievements = () => {
  return (
    <div className='achievements-container'>
      <div className='achievements'>


        <div className='achievements-trophys'>

          <p className='achievements-name' > champions league </p>
          <p className='achievements-logo'> 🏆 </p>
          <p className='achievements-point'> . </p>
        </div>

        <div className='achievements-trophys'>
          <p className='achievements-name' > la liga </p>
          <p className='achievements-logo'> 🏆 </p>
          <p className='achievements-point'> . </p>
        </div>

        <div className='achievements-trophys'>
          <p className='achievements-name' > cups </p>
          <p className='achievements-logo'> 🏆 </p>
          <p className='achievements-point'> . </p>
        </div>

        <div className='achievements-trophys'>
          <p className='achievements-name' >super cups </p>
          <p className='achievements-logo'> 🏆 </p>
          <p className='achievements-point'> . </p>
        </div>

        <div className='achievements-trophys'>
          <p className='achievements-name' > fifa club world cup  </p>
          <p className='achievements-logo'> 🏆 </p>
          <p className='achievements-point'> . </p>
        </div>

        <div className='achievements-trophys'>
          <p className='achievements-name' > europa league </p>
          <p className='achievements-logo'> 🏆 </p>
          <p className='achievements-point'> . </p>
          <hr />
        </div>

        <div className='achievements-trophys'>
          <p className='achievements-name' > europe super cup </p>
          <p className='achievements-logo'> 🏆 </p>
          <p className='achievements-point'> . </p>
        </div>
        
      </div >
      <hr className='achievements-hr'/>
      <div className='achievements-numbers'>
      <p className='achievements-numb1'> 15 </p>
      <p className='achievements-numb2'> 36 </p>
      <p className='achievements-numb3'> 20 </p>
      <p className='achievements-numb4'> 13 </p>
      <p className='achievements-numb5'> 9  </p>
      <p className='achievements-numb6'> 2 </p>
      <p className='achievements-numb7'> 6 </p>
      </div>
    </div>
  );
};

export default Achievements;