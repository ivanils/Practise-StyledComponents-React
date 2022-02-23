import { ThemeProvider } from "styled-components"
import { Wrapper, Section, TextMain, WrapperText, ImgMain, Svg, ImgImg, H1, P, TopCards, BottomCards, WrapperCards, Card, TextCard, PCard, Img, Footer, Links, Link, Rrss, Rs } from "./App.styled"
import { GlobalStyles } from "./Global.styled"



const theme = {}

const App = () => {

  let mainData = [
    {
      id      : 1,
      svg     : 'src/assets/svg/bandeja.svg',
      title   : 'Triage is first aid for your inbox.',
      message : 'Everything you loved about the original Triage is back - only better. Download Triage 2 on the App Store today.',
      img     : 'src/assets/imgs/photo1.png',
      responsiveColor : '#0062cc',
      download: 'src/assets/download.svg',
      color   : '#007afe',
      pTop    : true
    },
    {
      id      : 2,
      svg     : 'src/assets/svg/izq.svg',
      title   : 'Drag left to archive',
      message : 'Unread messages appear in a stack of cards, like this.',
      img     : 'src/assets/imgs/photo2.png',
      responsiveColor : '#cc2444',
      color   : '#fe2c55'
    },
    {
      id      : 3,
      svg     : 'src/assets/svg/drc.svg',
      title   : 'Drag right to keep',
      message : 'Or create your oen custom workflow.',
      img     : 'src/assets/imgs/photo3.png',
      responsiveColor : '#333333',
      color   : '#000000'
    },
    {
      id      : 4,
      svg     : 'src/assets/svg/expand.svg',      
      title   : 'Tap to expand',
      message : 'Open the message to view the whole thread.',
      img     : 'src/assets/imgs/photo4.png',
      responsiveColor : '#cc9300',
      color   : '#ffb800',
      pTop    : true
    },
    {
      id      : 5,
      svg     : 'src/assets/svg/reply.svg',
      title   : 'Reply in context',
      message : 'Send a quick reply without leaving the app.',
      img     : 'src/assets/imgs/photo5.png',
      responsiveColor : '#5a00cc',
      color   : '#7000ff',
      pTop    : true
    },
    // {
    //   color   : '#f2f2f2'
    // },
    // {
    //   color   : '#fff'
    // }
  ]
  let dataCards = [
    {
      id         : 1,
      svgCard    : 'src/assets/svg/bottomCards/mail.svg',
      textCard   : 'Works with Gmail, iCloud & IMAP',
      color      : '#007afe',
      secondColor: '#f2f2f2',
      secondtext : 'Since I´ve been using Triage, I´m more caught up on my email than I have been in years.',
      secondimg  : 'src/assets/daring-fireball.png'
    },
    {
      id         : 2,
      svgCard    : 'src/assets/svg/bottomCards/chip.svg',
      textCard   : 'All processing happens on device',
      color      : '#ffb800',
      secondColor: '#f2f2f2',
      secondtext : 'If you´re constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.',
      secondimg  : 'src/assets/the-verge.svg',
      black       : true
    },
    {
      id         : 3,
      svgCard    : 'src/assets/svg/bottomCards/shield.svg',
      textCard   : 'Your data is yours to stay',
      color      : '#fe2c55',
      secondColor: '#f2f2f2',
      secondtext : 'Triage makes it feel seamless, and even fun, to achieve - if not Inbox Zero - at least Inbox Zen.',
      secondimg  : 'src/assets/macworld.svg'
    },
    {
      id         : 4,
      svgCard    : 'src/assets/svg/bottomCards/night.svg',
      textCard   : 'Supports dark mode',
      color      : '#000000',
      secondColor: '#f2f2f2',
      secondtext : 'Triage provides the first aid necessary to get your inbox back in fighting shape.',
      secondimg  : 'src/assets/maclife.png'
    },
    {
      id         : 5,
      svgCard    : 'src/assets/svg/bottomCards/thumb.svg',
      textCard   : 'Free to use. Or pay for more features.',
      color      : '#7000ff',
      secondColor: '#f2f2f2',
      secondtext : 'Triage is a boon to those who have striggles to keep their inboxed clean and organized.',
      secondimg  : 'src/assets/clean-email.png'
    },
    {
      id         : 6,
      svgCard    : 'src/assets/svg/bottomCards/hammer.svg',
      textCard   : 'Built & maintained by indie developers',
      color      : '#fff',
      secondColor: '#f2f2f2',
      secondtext : 'Triage is my new favorite email app for iPhone.',
      secondimg  : 'src/assets/macstories.png',
      black       : true
    }
  ]
  let linksFooter = [
    {
      text : 'FAQ',
      url  : '#FAQ'
    },
    {
      text : 'Privacy',
      url  : '#Privacy'
    },
    {
      text : 'Terms',
      url  : '#Terms'
    },
    {
      text : 'Security',
      url  : '#Security'
    }
  ]
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {
        mainData.map((seccion, i)=>
          <Section bg={seccion.color} className={ (seccion.pTop == true ) ? 'p-top' : 'p-bot'}>
            <Wrapper className={ i % 2 ? 'right' : '' }>
              <TextMain>
                <WrapperText >
                  <Svg className={(seccion.id == 1) ? 'large' : ''} src={seccion.svg}></Svg>
                  <H1 className={(seccion.id == 1) ? 'large' : '', (seccion.id == 4) ? 'black' : ''}>{seccion.title}</H1>
                  <P className={(seccion.id == 4) ? 'black' : ''}>{seccion.message}</P>
                  {(seccion.download) ? <Svg className="download" src={seccion.download}></Svg> : ''}
                </WrapperText>
              </TextMain>
              <ImgMain className={ (seccion.pTop == true ) ? 'p-top' : 'p-bot'} resbg={seccion.responsiveColor}>
                <ImgImg src={seccion.img}></ImgImg>
              </ImgMain>
            </Wrapper>
          </Section>
        )
      }
      <TopCards>
        <WrapperCards>
          {dataCards.map((card, i)=>
            <Card bg={card.color}>
              <Svg src={card.svgCard}></Svg>
              <TextCard className={(card.black) ? 'black' : ''}>{card.textCard}</TextCard>
            </Card>
          )}
        </WrapperCards>
      </TopCards>
      <BottomCards>
        <H1 className="card">Praise for Triage 1</H1>
        <WrapperCards>
          {dataCards.map((card, i)=>
            <Card className="bot" bg={card.secondColor}>
              <PCard>{card.secondtext}</PCard>
              <Img src={card.secondimg}></Img>
            </Card>
          )}
        </WrapperCards>
      </BottomCards>
      <Footer>
            <Links>
              {linksFooter.map((link,i)=>
                <Link><a href={link.url}>{link.text}</a></Link>
              )}
            </Links>
            <Rrss>
              <Rs><a href="mailto:triage@triage.cc">
             <Svg className="footer" src="src/assets/svg/rs/mail.svg"></Svg>
              </a></Rs>
              <Rs><a href="https://twitter.com">
             <Svg className="footer" src="src/assets/svg/rs/twitter.svg"></Svg>
              </a></Rs>
            </Rrss>
      </Footer>
    </ThemeProvider>
    
  )
}

export default App
