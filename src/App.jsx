import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/navbar'
import Nav2 from './components/nav2'
import Nav3 from './components/nav3'
import Live from './components/live'
import Buttons from './components/buttons'
import News_1 from './components/news_1'
import Match_1 from './components/match_1'
import News_2 from './components/news2'
import Match_2 from './components/match2'
import Match_3 from './components/match3'
import News_3 from './components/news3'
import Add from './components/add'
import Featured from './components/featured'
import Footer_1 from './components/footer'

function App() {
  let matches=["IND vs SL-IND Won","SOU vs NORS-NORs...","ITT vs LKK-LKK Won","SOUW vs NORW-Co...","CSG vs DGD-preview"]
  let news_1="INDIA TOUR OF SRI LANKA, 2024"
  let match_1=["Chepauk Super Gillies vs Dindigul Dragons, "]
  let match_1_time=["Today  •  6:45 PM at Dindigul, NPR College Ground"]
  let team_1=["GSD"]
  let team_1_score=["158-6 (20 Ovs)"]
  let team_2=["DGD"]
  let team_2_score=["152-5 (18.3 Ovs)"]
  let match_1_result=["Dindigul Dragons need 7 runs in 9 balls"]
  let news_2=["THE HUNDRED MENS COMPETITION 2024"]

  let match_2=["Birmingham Phoenix vs Trent Rockets, "]
  let match_2_time=["Today  •  10:30 PM at Nottingham, Trent Bridge"]
  let team_11=["BRM"]
  let team_11_score=["108-6 (11 Ovs)"]
  let team_22=["TREE"]
  let team_22_score=["109-0 (19.3 Ovs)"]
  let match_2_result=["Tegramen Ringing Won the Match"]

  let news_3=["GLOBAL T20 CANADA 2024"]

  let match_3=["Surrey Jaguars vs Bangla Tigers Mississauga, "]
  let match_3_time=["Today  •  8:00 PM at Brampton, Ontario, CAA Centre"]
  let team_111=["SJG"]
  let team_111_score=["101-9 (19.3 Ovs)"]
  let team_222=["BTM"]
  let team_222_score=["30-3 (8.1 Ovs)"]
  let match_3_result=["Bangla Tigers Mississauga won by 4 wkts"]

  let featured=["pic1.png","pic2.png","pic3.png"]
  
  return (
    < >
    <NavBar></NavBar>
    <Nav2 matche1={matches}></Nav2>

  
    <Nav3></Nav3>
    <hr class="hr"/>
    <Live></Live>
    <hr class="hr"/>
    <div style={{display:"flex"}}>
    <div>
    <Buttons></Buttons>
    <News_1 news={news_1}></News_1>
    <Match_1 match1={match_1} match1time={match_1_time} team1={team_1} team1score={team_1_score} team2={team_2} team2score={team_2_score} match1result={match_1_result}></Match_1>
    <News_2 news2={news_2}></News_2>
    <Match_2 match2={match_2} match2time={match_2_time} team11={team_11} team11score={team_11_score} team22={team_22} team22score={team_22_score} match2result={match_2_result}></Match_2>
    <News_3 news3={news_3}></News_3>
    <Match_3 match3={match_3} match3time={match_3_time} team111={team_111} team111score={team_111_score} team222={team_222} team222score={team_222_score} match3result={match_3_result}></Match_3>
    </div>

    <div>
      <Add></Add>
      <Featured pics={featured}></Featured>
    </div>
    </div>
    <Footer_1></Footer_1>
    
    </>

  )
}
export default App
