import { useEffect } from 'react';
import { Container, Divider, Grid, Icon, Header, Menu } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  useEffect(() => {
    document.title = "Home | Richard Rohac"
  }, []);

  return (
    <Container className='dark-container' fluid={true}>
      <Container>
        <Menu inverted={true} pointing={true} secondary={true}>
          <Menu.Item name='Home' active={true}/>
        </Menu>
        <title>Richard Rohac | Home</title>
        <Grid className='main-content'>
          <Grid.Row>
            <Grid.Column>
              <Header size='large' inverted={true}>Hey!</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={11}>
              <Header className='secondary-text' size='medium' inverted={true}>
                So you found my personal website. Unfortunately this is still work-in-progress endeavour. Hopefully I will have more content soon!
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider inverted={true}/>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header size='medium' inverted={true}>
                <a href='mailto:website@richardrohac.net'><Icon link={true} name='mail'/> e-mail</a>
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header size='medium' inverted={true}>
                <a href='https://github.com/RichardRohac' target='_blank'><Icon link={true} name='github'/> GitHub</a>
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header size='medium' inverted={true}>
                <a href='https://uk.linkedin.com/in/richard-rohac' target='_blank'><Icon link={true} name='linkedin'/> LinkedIn</a>
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header size='medium' inverted={true}>
                <a href='https://steamcommunity.com/id/_theone_/' target='_blank'><Icon link={true} name='steam'/> Steam</a>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container className='footer centered secondary-text'>
        <Divider inverted={true}/>
        &#169; Richard Rohac | 2021
      </Container>
    </Container>
  );
}

export default App;
