import PropCard from "./components/PropCard"
import { Card, ActionButton, Actions, Header, HeaderButton, Image, Name, Role, SocialButton, Socials } from './components/Card'
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoArrowBack, IoEllipsisVerticalOutline } from "react-icons/io5";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className='w-screen min-h-screen flex gap-10 flex-col items-center justify-center py-4'>

      <Tabs>
        <div className='flex'>
          <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
          <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
          <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
        </div>

        <Tabs.TabPanel index={0}>Tabpanel 1</Tabs.TabPanel>
        <Tabs.TabPanel index={1}>Tabpanel 2</Tabs.TabPanel>
        <Tabs.TabPanel index={2}>Tabpanel 3</Tabs.TabPanel>

        <div className='flex'>
          <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
          <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
          <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
        </div>
      </Tabs>

      <PropCard
        name='John Doe'
        role='UX Specialist'
        imageSrc='https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8'
        imageAlt='Profile image'
        onBackClick={() => { }}
        onOptionsClick={() => { }}
        onCallClick={() => { }}
        onMessageClick={() => { }}
      />

      <Card>

        <Image src={'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8'} alt={'Profile image'} />
        <div className='mt-4 mb-2'>
          <Name>John Doe</Name>
          <Role>UX Specialist</Role>
        </div>
        <Socials>
          <SocialButton><IoLogoInstagram /></SocialButton>
          <SocialButton><IoLogoLinkedin /></SocialButton>
          <SocialButton><IoLogoTwitter /></SocialButton>
          <SocialButton><IoLogoYoutube /></SocialButton>
        </Socials>
      </Card>


    </div>
  )
}

export default App
